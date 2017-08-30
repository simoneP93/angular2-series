import { Component } from '@angular/core';
import { SeriesService } from './services/series.service';
import { Hero } from './model/hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  search: string;
  // heroes: Hero[];
  searches:any;
genres:any;

  constructor(private seriesService: SeriesService) {
  }

  getSearches(): void {
    // debugger;
    console.log(this.search);
    this.seriesService.getSearches(this.search).then(searches => {
      this.searches = searches;
      console.log(searches);
    });
  }

}