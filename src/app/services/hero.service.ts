import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Hero } from '../models/hero.model';
import { HEROES } from '../mocks/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private nextId: number = 1;

  constructor() {
    this.resetServiceState();
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES.slice());
  }

  getHeroById(id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === id);
    return hero
      ? of({ ...hero })
      : throwError(() => new Error('Hero not found'));
  }

  updateHero(hero: Hero): Observable<Hero> {
    const index = HEROES.findIndex((h) => h.id === hero.id);
    if (index !== -1) {
      HEROES[index] = { ...hero };
      return of(HEROES[index]);
    } else {
      return throwError(() => new Error('Hero not found'));
    }
  }

  addHero(hero: Hero): Observable<Hero> {
    const newHero = { ...hero, id: this.nextId++ };
    HEROES.push(newHero);
    return of(newHero);
  }

  deleteHero(id: number): Observable<unknown> {
    const index = HEROES.findIndex((h) => h.id === id);
    if (index !== -1) {
      HEROES.splice(index, 1);
      return of(undefined);
    } else {
      return throwError(() => new Error('Hero not found'));
    }
  }

  resetServiceState(): void {
    const maxId = HEROES.reduce((acc, hero) => Math.max(acc, hero.id), 0);
    this.nextId = maxId + 1;
  }
}
