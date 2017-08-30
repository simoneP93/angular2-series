import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FilmService } from '../services/film.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgClass,SlicePipe } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

film:any;
cast:any;
crew:any;
reviews:any;
selectedTab:number=0;
image:string=null;
  constructor( private filmService: FilmService,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
     this.getFilmDetail();
  }
  getFilmDetail(){
     this.route.paramMap
      .switchMap((params: ParamMap) => this.filmService.getSingleFilm(+params.get('id')))
      .subscribe(show => {
        this.film = show;
        console.log(this.film);
        //selectedTab default: 0 - Episodes
        this.selectedTab = 0;
        this.switchTabsFunction(0);
      });
  }
   getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
}
  getCastByShow(){
     this.route.paramMap
      .switchMap((params: ParamMap) => this.filmService.getCastbyFilm(+params.get('id')))
      .subscribe(credits => {
        this.cast = credits.cast;
        this.crew=credits.crew;
        console.log(this.cast);
        
      });
  }

  getReviewbyFilm(){
       this.route.paramMap
      .switchMap((params: ParamMap) => this.filmService.getReviewbyFilm(+params.get('id')))
      .subscribe(reviews => {
        if(reviews){
        this.reviews =reviews.results;
        }
        console.log(this.reviews);
      });
  }

   switchTabsFunction(tab) {
    this.selectedTab = tab;
    switch (tab) {
      case 0:
        // this.getSeasonsByShow();
        return;
      case 1:
        this.getCastByShow();
        return;
      case 2:
      if(this.crew) return;
      else
        this.getCastByShow();
        return;
          case 3:
        this.getReviewbyFilm();
        return;
      default: break;
    }
   }

}
