import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topShows: any;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getTopShows();
  }


  getTopShows(): void {
    // debugger;
    this.heroService.getTopShows().then(shows => {
      this.topShows = shows;
      console.log(this.topShows);
    });
  }
}
