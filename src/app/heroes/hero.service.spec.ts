import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HEROES } from '../mocks/mock-heroes';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all heroes', (done: DoneFn) => {
    service.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(HEROES);
      done();
    });
  });

  it('should return hero by id', (done: DoneFn) => {
    const hero = HEROES[0];
    service.getHeroById(hero.id).subscribe((result) => {
      expect(result).toEqual(hero);
      done();
    });
  });

  it('should update hero', (done: DoneFn) => {
    const hero = { ...HEROES[0], name: 'Updated Hero' };
    service.updateHero(hero).subscribe((updatedHero) => {
      expect(updatedHero).toEqual(hero);
      done();
    });
  });

  it('should add hero', (done: DoneFn) => {
    const newHero = { id: 0, name: 'New Hero' };
    service.addHero(newHero).subscribe((heroWithId) => {
      expect(heroWithId.id).toBeGreaterThan(0);
      expect(HEROES).toContain(heroWithId);
      done();
    });
  });

  it('should delete hero', (done: DoneFn) => {
    const heroToDelete = HEROES[0];
    service.deleteHero(heroToDelete.id).subscribe(() => {
      expect(HEROES.find((h) => h.id === heroToDelete.id)).toBeUndefined();
      done();
    });
  });
});
