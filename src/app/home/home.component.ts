import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { FilmService } from '../services/film.service';

import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topShows: any;
films:any;
// topSpinner:number=0;
showSpinner:boolean=true;
  constructor(private seriesService: SeriesService,
  private filmService: FilmService) { }

  ngOnInit() {
    this.getTopShows();
    this.getTopFilms();
  }

  getTopShows(): void {
    // debugger;
    this.seriesService.getTopShows().then(shows => {
      this.topShows = shows;
      console.log(this.topShows);
      this.showSpinner=false;
    });
  }
  getTopFilms(): void {
    // debugger;
    this.filmService.getFilms().then(films => {
      this.films = films;
      console.log(this.films);
    });
  }
}
