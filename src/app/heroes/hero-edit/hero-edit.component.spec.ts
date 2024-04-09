import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroEditComponent } from './hero-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { NotificationService } from '../../services/notification.service';

describe('HeroEditComponent', () => {
  let component: HeroEditComponent;
  let fixture: ComponentFixture<HeroEditComponent>;
  let mockHeroService: jasmine.SpyObj<HeroService>;
  let mockNotificationService: jasmine.SpyObj<NotificationService>;
  let mockRouter: any;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockHeroService = jasmine.createSpyObj('HeroService', ['getHeroById', 'updateHero']);
    mockNotificationService = jasmine.createSpyObj('NotificationService', ['showError', 'showSuccess']);
    mockActivatedRoute = { snapshot: { paramMap: { get: () => '1' } } };
    mockRouter = { navigate: jasmine.createSpy('navigate') };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [HeroEditComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService },
        { provide: NotificationService, useValue: mockNotificationService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEditComponent);
    component = fixture.componentInstance;
    mockHeroService.getHeroById.and.returnValue(of({ id: 1, name: 'Test Hero' }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get hero on init', () => {
    expect(mockHeroService.getHeroById).toHaveBeenCalledWith(1);
    expect(component.hero).toEqual({ id: 1, name: 'Test Hero' });
  });

  it('should navigate to "/heroes" when saveHero is successful', () => {
    component.hero.name = 'Updated Hero';
    mockHeroService.updateHero.and.returnValue(of({}));
    component.saveHero();
    expect(mockHeroService.updateHero).toHaveBeenCalledWith(component.hero);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/heroes']);
  });

  it('should not update hero with empty name', () => {
    component.hero.name = '';
    component.saveHero();
    expect(mockHeroService.updateHero).not.toHaveBeenCalled();
    expect(mockNotificationService.showError).toHaveBeenCalledWith('El nombre del héroe no puede estar en blanco.');
  });
});
