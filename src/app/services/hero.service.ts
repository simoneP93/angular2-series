import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../model/hero';
import { Observable } from "rxjs/Observable";
import { HEROES } from '../constants/mock-heroes';


@Injectable()
export class HeroService {

  private apiUrl = 'api/heroes';  // URL to web api
  private seriesApiUrl = 'http://api.tvmaze.com';

  constructor(private http: Http) { }

  // getHeroes(): Promise<Hero[]> {
  //   return this.http.get(this.apiUrl)
  //     .toPromise()
  //     .then(response => response.json().data as Hero[])
  //     .catch(this.handleError);
  // }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getEpisodesbyShow(showId) {
    return this.http.get('https://api.tvmaze.com/seasons/' + showId + '/episodes')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getSearches(search: string) {
    return this.http.get('https://api.tvmaze.com/search/shows?q=' + search)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getTopShows() {
    return this.http.get('http://api.tvmaze.com/shows')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getSingleShow(showId) {
    return this.http.get('http://api.tvmaze.com/shows/' + showId + '?embed=episodes')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  getSeasonsByShow(showId) {
    return this.http.get('http://api.tvmaze.com/shows/' + showId + '/seasons')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  getCastByShow(showId) {
    return this.http.get('http://api.tvmaze.com/shows/' + showId + '/cast')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  getCrewByShow(seasonId) {
    return this.http.get('http://api.tvmaze.com/shows/' + seasonId + '/crew')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  getEpisodesBySeason(seasonId) {
    return this.http.get('http://api.tvmaze.com/seasons/' + seasonId + '/episodes')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
