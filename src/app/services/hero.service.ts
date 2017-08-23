import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../constants/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
