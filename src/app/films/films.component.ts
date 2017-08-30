import { Component, OnInit } from '@angular/core';
import {FilmService} from '../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

films:any;

  constructor(private filmService : FilmService) { }

  ngOnInit() {
    this.getTopFilms();
  }
  
 getTopFilms(): void {
    // debugger;
    this.filmService.getFilms().then(films => {
      this.films = films;
      console.log(this.films);
    });
  }
}
