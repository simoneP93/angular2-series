import { Component } from '@angular/core';
import { HeroService } from './services/hero.service';
import { Hero } from './model/hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  search: string;
  heroes: Hero[];

  constructor(private heroService: HeroService) {

  }

  getSearches(): void {
    // debugger;
    console.log(this.search);
    this.heroService.getSearches(this.search).then(searches => {
      this.heroes = searches;
      console.log(searches);
    });
  }

}