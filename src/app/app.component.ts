import { Component, OnInit } from '@angular/core';
import { SeriesService } from './services/series.service';
import { Hero } from './model/hero';
import { FilmService } from './services/film.service';
// import "materialize-css";
// import "angular2-materialize";
// import 'materializecss';
// import 'materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  search: string;
  // heroes: Hero[];
  searches: any;
  genres: any;
  // autocompleteInit = {
  //   autocompleteOptions: {
  //     data: {
  //       'Apple': null,
  //       'Microsoft': null,
  //       'Google': null
  //     },
  //     limit: Infinity,
  //     minLength: 1
  //   }
  // };

  ngOnInit() {

  }

  constructor(private seriesService: SeriesService,
    private filmsService: FilmService) {
  }

  getSearches(): void {
    // debugger;
    console.log(this.search);
    this.filmsService.getAllSearches(this.search).subscribe(searches => {
      this.searches = searches;
      console.log(searches);

    });
  }

}