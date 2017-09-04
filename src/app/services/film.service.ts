import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FilmAPI } from '../constants/api-routes';
import { Films } from '../model/films';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class FilmService {

    constructor(private http: Http) { }

    getFilms(): Observable<Films[]> {
        // return this.http.get(FilmAPI + '/discover/movie?' +
        //     'api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
        //     .toPromise()
        //     .then(response => response.json());

        let apiURL = FilmAPI + '/discover/movie?' +
            'api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US&' +
            +'sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

        return this.http.get(apiURL)
            .map(res => res.json());
    }

    getInfoFromImdb(id) {
        return this.http.get(FilmAPI + '/find/' + id + '?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US&external_source=imdb_id')
            .toPromise()
            .then(response => response.json())
    }

    getInfoPeople(id) {
        return this.http.get(FilmAPI + '/person/' + id + '?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US')
            .toPromise()
            .then(response => response.json())
    }

    getFilmsByType(page, type): Observable<Films> {
        let apiURL = FilmAPI + '/movie/' + type + '?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US&page=' + page;

        return this.http.get(apiURL)
            .map(res => res.json());
    }

    getAllSearches(search): Observable<any> {
        let apiURL = FilmAPI + '/search/multi?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US&query=' + search + '&page=1';

        return this.http.get(apiURL)
            .map(res => res.json());
    }

    getFilmsByCategoriesForPage(ids, page) {
        return this.http.get(FilmAPI + '/discover/movie?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US&sort_by=popularity.desc' +
            '&page=' + page + '&with_genres=' + ids)
            .toPromise()
            .then(response => response.json())
    }
    getSingleFilm(filmId) {
        return this.http.get(FilmAPI + '/movie/' + filmId + '?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US')
            .toPromise()
            .then(response => response.json())
    }

    getCastbyFilm(filmId) {
        return this.http.get(FilmAPI + '/movie/' + filmId + '/credits?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US')
            .toPromise()
            .then(response => response.json())
    }
    getReviewbyFilm(filmId) {
        return this.http.get(FilmAPI + '/movie/' + filmId + '/reviews?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US')
            .toPromise()
            .then(response => response.json())
    }
    getGenres() {
        return this.http.get(FilmAPI + '/genre/tv/list?api_key=1053186c451dc5c0c9a2a89a6fb14c15&language=en-US')
            .toPromise()
            .then(response => response.json())
    }
}
