import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FilmAPI } from '../constants/api-routes';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class FilmService {

  constructor(private http: Http) { }

 getFilms() {
    return this.http.get(FilmAPI+ '/discover/movie?'+
          'api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .toPromise()
      .then(response => response.json())
  }
  getFilmsByCategoriesForPage(ids,page){
      return this.http.get(FilmAPI +'/discover/movie?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US&sort_by=popularity.desc'+
                       '&page='+page+'&with_genres='+ids)
                       .toPromise()
      .then(response => response.json())
  }
  getSingleFilm(filmId){
      return this.http.get(FilmAPI+ '/movie/'+filmId+'?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US')
      .toPromise()
      .then(response => response.json())
  }

  getCastbyFilm(filmId){
      return this.http.get(FilmAPI+ '/movie/'+filmId+'/credits?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US')
      .toPromise()
      .then(response => response.json())
  }
   getReviewbyFilm(filmId){
      return this.http.get(FilmAPI+ '/movie/'+filmId+'/reviews?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US')
      .toPromise()
      .then(response => response.json())
  }
  getGenres() {
    return this.http.get(FilmAPI+ '/genre/tv/list?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US')
      .toPromise()
      .then(response => response.json())
  }
}
