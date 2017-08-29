import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  constructor(private heroService: HeroService) { }


  episodes: any;

  getEpisodes(): void {
    // this.heroService.getEpisodesbyShow().then(episodes => {
    //   this.episodes = episodes;
    //   console.log(episodes);
    // });
  }

  ngOnInit() {
    this.getEpisodes();
  }

}
