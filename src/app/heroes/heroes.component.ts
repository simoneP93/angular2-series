import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { SeriesService } from '../services/series.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: []
})

export class HeroesComponent implements OnInit {

  title = 'Tour of Heroes';

  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit() {
    // this.getHeroes();
  }
  constructor(private seriesService: SeriesService) { }

  // getHeroes(): void {
  //   this.seriesService.getHeroes().then(heroes => {
  //     this.heroes = heroes;
  //     console.log(this.heroes);
  //   });
  // }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}