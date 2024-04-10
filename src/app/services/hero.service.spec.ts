import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { Hero } from '../models/hero.model';
import { HEROES } from '../mocks/mock-heroes';

describe('HeroService', () => {
  let service: HeroService;
  let originalHeroesLength: number;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
    service.resetServiceState();
    originalHeroesLength = HEROES.length;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all heroes', (done: DoneFn) => {
    service.getHeroes().subscribe((heroes) => {
      expect(heroes.length).toBe(originalHeroesLength);
      done();
    });
  });

  it('should return a single hero by ID', (done: DoneFn) => {
    const sampleHero = HEROES[0];
    service.getHeroById(sampleHero.id).subscribe((hero) => {
      expect(hero).toEqual(sampleHero);
      done();
    });
  });

  it('should update a hero and return the updated hero', (done: DoneFn) => {
    const updatedHero: Hero = { ...HEROES[0], name: 'Updated Name' };
    service.updateHero(updatedHero).subscribe((hero) => {
      expect(hero).toEqual(updatedHero);
      done();
    });
  });

  it('should delete a hero and return undefined', (done: DoneFn) => {
    const heroToDelete = HEROES[0];
    service.deleteHero(heroToDelete.id).subscribe((response) => {
      expect(response).toBeUndefined();
      done();
    });
  });

  it('should throw an error if hero to update not found', (done: DoneFn) => {
    const updatedHero: Hero = { id: 999, name: 'Updated Name' };
    service.updateHero(updatedHero).subscribe({
      next: () => {},
      error: (error) => {
        expect(error.message).toContain('Hero not found');
        done();
      },
    });
  });

  it('should throw an error if hero to delete not found', (done: DoneFn) => {
    service.deleteHero(999).subscribe({
      next: () => {},
      error: (error) => {
        expect(error.message).toContain('Hero not found');
        done();
      },
    });
  });
});
