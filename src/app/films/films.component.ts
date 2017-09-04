import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { CategoriesAnimation } from '../model/categoriesAnimation';
import { Util } from '../utils/util';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  animations: [
    // trigger('categoriesState', [
    //   state('active', style({
    //     backgroundColor: '#eee',
    //     transform: 'scale(1)'
    //   })),
    //   state('inactive',   style({
    //     backgroundColor: '#cfd8dc',
    //     transform: 'scale(1.1)'
    //   })),
    //   transition('active=> inactive', animate('100ms ease-in')),
    //   transition('inactive=> active', animate('100ms ease-out'))
    // ])
    trigger(
      'enterAnimation', [
        // transition(':enter', [
        //   style({transform: 'translateX(100%)', opacity: 0}),
        //   animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        // ]),
        // transition(':leave', [
        //   style({transform: 'translateX(0)', opacity: 1}),
        //   animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        // ])
        transition(':enter', [   // :enter is alias to 'void => *'
          style({ opacity: 0 }),
          animate(500, style({ opacity: 1 }))
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
          animate(500, style({ opacity: 0 }))
        ])
      ]
    )
  ]
})
export class FilmsComponent implements OnInit {

  films: any;
  initialFilms: any;
  totalpages: number[];
  genres: any;
  showSpinner: boolean = false;
  showCategories: boolean = false;
  categoriesAnimation: CategoriesAnimation = { state: 'inactive' };
  categoriesFiltersList: boolean[] = [];
  categoriesFiltersListId: string[];
  currentPage: number = -1;
  currentType: string = 'popular';

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    // this.getTopFilms();
    this.getFilmsByType(this.currentType);

  }

  getTopFilms(): void {
    // debugger;
    this.showSpinner = true;

    // this.filmService.getFilms().then(films => {
    //   this.films = films;
    //   this.initialFilms = films;
    //   this.totalpages = this.getPages(this.films.total_pages);

    //   console.log(this.films);
    //   this.getGenres();
    // });
  }

  getFilmsByType(type) {
    this.filmService.getFilmsByType(this.currentPage == -1 ? 1 : this.currentPage, type).subscribe(
      films => {
        this.films = films
        this.initialFilms = films;
        this.totalpages = this.getPages(this.films.total_pages);

        console.log(this.films);
        this.getGenres();
        this.showSpinner = false;
      },
      err => {
        // Log errors if any
        console.log(err);
      });
  }


  getGenres(): void {
    // debugger;
    this.filmService.getGenres().then(genres => {
      if (genres) {
        this.genres = genres.genres;
      }
      // this.checkCategories(this.genres, this.films);
      console.log(JSON.stringify(this.genres));
      console.log(this.films);
      this.showSpinner = false;

    });
  }

  checkCategories(genre, genresListFilm) {
    // debugger;
    if (genre && genresListFilm) {
      genresListFilm.forEach(glf => {
        if (glf == genre.id) return true;
        else return false;
      });
    }
  }

  filterForCategories() {
    this.filmService.getFilmsByCategoriesForPage(this.getCategorieIds(), this.currentPage).then(films => {
      this.films = films;

      this.totalpages = this.getPages(this.films.total_pages);
    });
  }

  getCategorieIds() {
    this.categoriesFiltersListId = Util.getPropertiesOfBooleanArray(this.categoriesFiltersList);
    return this.categoriesFiltersListId.join().replace(/,/g, "%2C");
  }
  getPages(pages: number) {
    if (this.currentPage == -1) {
      this.currentPage = (this.totalpages && this.totalpages.length > 0) ? this.totalpages[0] : 1;
    }

    return Array.apply(null, { length: pages }).map(Number.call, Number);
  }

  changePage(page) {
    this.currentPage = page + 1;
    console.log(this.categoriesFiltersListId);
    if (this.categoriesFiltersListId && this.categoriesFiltersListId.length > 0)
      this.filterForCategories();
    else
      this.getFilmsByType(this.currentType);
  }
  toggleCategories() {
    this.showCategories = !this.showCategories;
    // this.categoriesAnimation.state=event=='y' ?  'active' : 'inactive';
  }

  switchTabsFunction(type) {
    this.currentType = type;
    this.showSpinner = true;
    this.getFilmsByType(type);
  }
}
