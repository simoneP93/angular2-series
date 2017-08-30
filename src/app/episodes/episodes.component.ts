import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  constructor(private seriesService: SeriesService) { }


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
