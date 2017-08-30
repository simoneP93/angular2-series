import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../model/hero';
import { SeriesService } from '../services/series.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {

  heroes: Hero[] = [];
  hero: Hero = { id: 0, name: "test" };

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute,
    private location: Location) {

  }

  ngOnInit(): void {
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.seriesService.getHero(+params.get('id')))
    //   .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
