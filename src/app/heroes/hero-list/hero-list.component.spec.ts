import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { HeroListComponent } from './hero-list.component';
import { HeroService } from '../../services/hero.service';
import { NotificationService } from '../../services/notification.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared-modules/shared.module';

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;
  let mockHeroService: jasmine.SpyObj<HeroService>;
  let mockNotificationService: jasmine.SpyObj<NotificationService>;

  beforeEach(async () => {
    mockHeroService = jasmine.createSpyObj('HeroService', [
      'getHeroes',
      'deleteHero',
    ]);
    mockNotificationService = jasmine.createSpyObj('NotificationService', [
      'showSuccess',
      'showError',
    ]);
    mockHeroService.getHeroes.and.returnValue(
      of([
        { id: 1, name: 'Test Hero' },
        { id: 2, name: 'Another Hero' },
      ])
    );
    mockHeroService.deleteHero.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      declarations: [HeroListComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService },
        { provide: NotificationService, useValue: mockNotificationService },
      ],
      imports: [FormsModule, RouterTestingModule, SharedModule],
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

  it('should load heroes on init', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(component.heroes.length).toBeGreaterThan(0);
    expect(component.filteredHeroes.length).toBeGreaterThan(0);
    expect(component.isLoading).toBeFalse();
  }));

  it('should filter heroes correctly', () => {
    component.heroes = [
      { id: 1, name: 'Test Hero' },
      { id: 2, name: 'Another Hero' },
    ];
    component.applyFilter('test');
    expect(component.filteredHeroes.length).toBe(1);
    expect(component.filteredHeroes[0].name).toContain('Test');
  });

  it('should delete a hero and update list', () => {
    const mockHeroes = [
      { id: 1, name: 'Mortadelo' },
      { id: 2, name: 'Filemon' },
      { id: 3, name: 'Homer' },
    ];
    component.heroes = mockHeroes;
    component.filteredHeroes = mockHeroes;
    component.confirmDelete(mockHeroes[0]);
    expect(component.heroes.length).toBe(2);
    expect(component.filteredHeroes.length).toBe(2);
    expect(component.heroes[0].id).toBe(1);
  });

  it('should add search terms and apply filter correctly', fakeAsync(() => {
    component.ngOnInit();
    tick();
    component.search('test');
    tick(300);
    expect(component.filteredHeroes.length).toBe(1);
    expect(component.filteredHeroes[0].name).toContain('Test');
  }));

  it('should unsubscribe on component destroy to prevent memory leaks', () => {
    spyOn(component['subscription'], 'unsubscribe');
    component.ngOnDestroy();
    expect(component['subscription'].unsubscribe).toHaveBeenCalled();
  });
});
