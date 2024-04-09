import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { HeroListComponent } from './hero-list.component';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Hero } from '../../models/hero.model';

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;
  let mockHeroService: jasmine.SpyObj<HeroService>;
  let HEROES: Hero[];

  beforeEach(async () => {
    HEROES = [
      { id: 1, name: 'SpiderMan' },
      { id: 2, name: 'IronMan' },
      { id: 3, name: 'Thor' },
    ];

    mockHeroService = jasmine.createSpyObj('HeroService', [
      'getHeroes',
      'deleteHero',
    ]);
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    mockHeroService.deleteHero.and.returnValue(of(true));

    await TestBed.configureTestingModule({
      declarations: [HeroListComponent],
      providers: [{ provide: HeroService, useValue: mockHeroService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set heroes correctly from the service', fakeAsync(() => {
    component.getHeroes();
    tick(1000);
    expect(component.heroes.length).toBe(3);
    expect(component.heroes).toEqual(HEROES);
  }));

  it('should filter heroes correctly', () => {
    component.heroes = [...HEROES];
    component.applyFilter('Iron');
    expect(component.filteredHeroes.length).toBe(1);
    expect(component.filteredHeroes[0]).toEqual(HEROES[1]);
  });

  it('should call deleteHero', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.confirmDelete(HEROES[2]);
    expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2].id);
  });
});
