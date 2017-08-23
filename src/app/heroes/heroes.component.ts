import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: []
})

export class HeroesComponent implements OnInit {

  ngOnInit() {
    this.getHeroes();
  }
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
      console.log(this.heroes);
    });
  }
  title = 'Tour of Heroes';

  heroes: Hero[];
  selectedHero: Hero;
  // heroes=ObjectsConstants.HEROES;
  // selectedHero:Hero= (this.heroes!=null && this.heroes.length>0) ? this.heroes[0] : new Hero();

  //   hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}