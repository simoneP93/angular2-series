import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgClass, SlicePipe } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-actor-profile',
  templateUrl: './actor-profile.component.html',
  styleUrls: ['./actor-profile.component.scss', '../circle-percentage.css']
})
export class ActorProfileComponent implements OnInit {

  constructor(private filmService: FilmService,
    private route: ActivatedRoute, ) { }

  info: any;
  infoImdb: any;

  ngOnInit() {
    this.getInfoPeople()

  }

  getInfoPeople() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.filmService.getInfoPeople(+params.get('id')))
      .subscribe(info => {
        this.info = info;
        console.log(this.info);

        this.getInfoFromImdb(this.info.imdb_id)
      });
  }
  getInfoFromImdb(id) {
    this.filmService.getInfoFromImdb(id).then(infoImdb => {
      // this.infoImdb = infoImdb;
      // console.log(this.infoImdb);
      // debugger;
      if (infoImdb && infoImdb.person_results) {
        if (infoImdb.person_results && infoImdb.person_results.length > 0)
          this.infoImdb = infoImdb.person_results[0];
      }
      console.log(this.infoImdb);

    });
  }

}
