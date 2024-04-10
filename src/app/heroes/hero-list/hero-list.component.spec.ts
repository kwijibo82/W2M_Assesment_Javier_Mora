<<<<<<< HEAD
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
=======
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
>>>>>>> recovering_code_v2
import { HeroListComponent } from './hero-list.component';
import { HeroService } from '../../services/hero.service';
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
<<<<<<< HEAD
      { id: 1, name: 'SpiderMan' },
      { id: 2, name: 'IronMan' },
      { id: 3, name: 'Thor' },
=======
      { id: 1, name: 'Spider-Man' },
      { id: 2, name: 'Iron Man' },
      { id: 3, name: 'Thor' },
      { id: 4, name: 'Capitana Marvel' },
      { id: 5, name: 'Black Widow' }
>>>>>>> recovering_code_v2
    ];

    mockHeroService = jasmine.createSpyObj('HeroService', [
      'getHeroes',
      'deleteHero',
    ]);
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    mockHeroService.deleteHero.and.returnValue(of(true));

    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [HeroListComponent],
      providers: [{ provide: HeroService, useValue: mockHeroService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
=======
      declarations: [ HeroListComponent ],
      imports: [FormsModule], // Importa FormsModule aquí
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] 
    })
    .compileComponents();
>>>>>>> recovering_code_v2
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set heroes correctly from the service', () => {
    expect(component.heroes.length).toBe(5);
    expect(component.heroes).toEqual(HEROES);
  });

  it('should filter heroes correctly', () => {
    component.applyFilter('Iron');
    expect(component.filteredHeroes.length).toBe(1);
    expect(component.filteredHeroes[0]).toEqual(HEROES[1]);
  });

<<<<<<< HEAD
  it('should call deleteHero', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.confirmDelete(HEROES[2]);
    expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2].id);
  });
=======
  it('should handle search correctly', fakeAsync(() => {
    const searchTerm = 'Black';
    component.search(searchTerm);
    tick(300);
    expect(component.filteredHeroes.length).toBe(1);
    expect(component.filteredHeroes[0].name).toContain(searchTerm);
  }));
>>>>>>> recovering_code_v2
});
