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
  films: any;
  showSpinner: boolean = true;
  genres: any;
  /**
   * 0 : films
   * 1 : series
   */
  selectedTab: number = 0;
  selectedGenre: number = 0;
  constructor(private seriesService: SeriesService,
    private filmService: FilmService) { }

  ngOnInit() {
    // this.getTopShows();
    // this.getTopFilms();
    this.getGenres();
    this.switchTabsFunction(this.selectedTab);
  }

  getTopShows(): void {
    // debugger;
    this.seriesService.getTopShows().then(shows => {
      this.topShows = shows;
      console.log(this.topShows);
      this.showSpinner = false;
    });
  }
  getTopFilms(): void {
    // debugger;
    // this.filmService.getFilms().then(films => {
    //   this.films = films;
    //   console.log(this.films);
    // });
    this.filmService.getFilms().subscribe(
      films => {
        this.showSpinner = false;

        this.films = films
        console.log(this.films);
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
      console.log(this.genres);
      this.showSpinner = false;

    });
  }

  selectGenre(genre) {
    this.selectedGenre = genre.id;
  }

  switchTabsFunction(type) {
    this.selectedTab = type;
    this.showSpinner = true;
    switch (type) {
      case 0:
        this.getTopFilms();
        return;
      case 1:
        this.getTopShows();
        return;
      default: return;
    }
  }
}
