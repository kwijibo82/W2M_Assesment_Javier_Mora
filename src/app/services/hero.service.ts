import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero.model';
import { HEROES } from '../mocks/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private nextId: number;

  constructor() {
    const maxId = HEROES.reduce((acc, hero) => Math.max(acc, hero.id), 0);
    this.nextId = maxId + 1;
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHeroById(id: number): Observable<Hero> {
    return of(HEROES.find((hero) => hero.id === id) as Hero);
  }

  updateHero(hero: Hero): Observable<unknown> {
    const index = HEROES.findIndex((h) => h.id === hero.id);
    if (index !== -1) {
      HEROES[index] = hero;
      return of(HEROES[index]);
    } else {
      throw new Error('Hero not found');
    }
  }

  addHero(hero: Hero): Observable<Hero> {
    hero.id = this.nextId++;
    HEROES.push(hero);
    return of(hero);
  }

  deleteHero(id: number): Observable<unknown> {
    const index = HEROES.findIndex((h) => h.id === id);
    if (index !== -1) {
      HEROES.splice(index, 1);
      return of(undefined);
    } else {
      throw new Error('Hero not found');
    }
  }
}
