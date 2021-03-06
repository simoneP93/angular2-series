import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../model/hero';
import { Observable } from "rxjs/Observable";
import { SeriesAPI } from '../constants/api-routes';
import { FilmAPI } from '../constants/api-routes';


@Injectable()
export class SeriesService {

  constructor(private http: Http) { }


  getEpisodesbyShow(showId) {
    return this.http.get(SeriesAPI+ '/seasons/' + showId + '/episodes')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getSearches(search: string) {
    return this.http.get(SeriesAPI+ '/search/shows?q=' + search)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getTopShows() {
    return this.http.get(SeriesAPI+ '/shows')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getSingleShow(showId) {
    return this.http.get(SeriesAPI+ '/shows/' + showId + '?embed=episodes')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  getSeasonsByShow(showId) {
    return this.http.get(SeriesAPI+ '/shows/' + showId + '/seasons')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  getCastByShow(showId) {
    return this.http.get(SeriesAPI+ '/shows/' + showId + '/cast')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  getCrewByShow(seasonId) {
    return this.http.get(SeriesAPI+ '/shows/' + seasonId + '/crew')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
   
  getEpisodesBySeason(seasonId) {
    return this.http.get(SeriesAPI+ '/seasons/' + seasonId + '/episodes')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // getHero(id: number): Promise<Hero> {
  //   // return this.getHeroes()
  //   //   .then(heroes => heroes.find(hero => hero.id === id));
  // }
}
