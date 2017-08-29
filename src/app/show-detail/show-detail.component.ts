import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgClass } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})

export class ShowDetailComponent implements OnInit {

  show: any;
  selectedTab: number = 0;
  episodes: any;
  seasons: any;
  initialEpisodes: any;
  seasonSelected: number = -1;
  cast: any;
  crew: any;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getShowDetail();


  }

  getShowDetail() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getSingleShow(+params.get('id')))
      .subscribe(show => {
        this.show = show;
        console.log(this.show);
        //selectedTab default: 0 - Episodes
        this.selectedTab = 0;
        this.switchTabsFunction(0);
      });
  }

  getSeasonsByShow() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getSeasonsByShow(+params.get('id')))
      .subscribe(seasons => {
        this.seasons = seasons;
        console.log(this.seasons);
      });
    this.episodes = this.show._embedded.episodes;
    this.initialEpisodes = this.episodes;
    console.log(this.seasonSelected)
  }

  getEpisodesBySeason(seasonId) {
    console.log(seasonId);
    this.episodes = this.show._embedded.episodes;
    this.initialEpisodes = this.episodes;
    this.seasonSelected = seasonId;
    this.episodes = this.initialEpisodes.filter(
      ep => ep.season === seasonId);
    console.log(this.initialEpisodes.filter(
      ep => ep.number == null));
    console.log(this.episodes);
  }
  getCastByShow() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getCastByShow(+params.get('id')))
      .subscribe(cast => {
        this.cast = cast;
        console.log(this.cast);
      });
  }
  getCrewByShow() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getCrewByShow(+params.get('id')))
      .subscribe(crew => {
        this.crew = crew;
        console.log(this.crew);
      });
  }
  checkSelectedSeason() {
    if (this.seasonSelected == -1 || this.selectedTab != 0) return false;
    else return true;
  }

  goToTvMazeLink(url) {
    window.location.href = url;
  }

  switchTabsFunction(tab) {
    this.selectedTab = tab;
    switch (tab) {
      case 0:
        this.getSeasonsByShow();
        return;
      case 1:
        this.getCastByShow();
        return;
      case 2:
        this.getCrewByShow();
        return;
      default: break;
    }
  }

}
