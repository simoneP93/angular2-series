import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { EpisodesComponent } from '../episodes/episodes.component';
import { HomeComponent } from '../home/home.component';
import { FilmsComponent } from '../films/films.component';
import { FilmDetailComponent } from '../film-detail/film-detail.component';

import { ShowDetailComponent } from '../show-detail/show-detail.component';
import { ShowInfoComponent } from '../show-info/show-info.component';

import { ActorProfileComponent } from '../actor-profile/actor-profile.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'show/:id', component: ShowDetailComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'films', component: FilmsComponent },
    { path: 'film/:id', component: FilmDetailComponent },
    { path: 'actor/:id', component: ActorProfileComponent },

    { path: 'heroes', component: HeroesComponent },
    { path: 'episodes', component: EpisodesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }