import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HeroCreateComponent } from './hero-create.component';
import { HeroService } from '../../services/hero.service';
import { NotificationService } from '../../services/notification.service';

describe('HeroCreateComponent', () => {
  let component: HeroCreateComponent;
  let fixture: ComponentFixture<HeroCreateComponent>;
  let heroServiceMock: HeroService;
  let notificationServiceMock: unknown;

  beforeEach(async () => {
    heroServiceMock = jasmine.createSpyObj('HeroService', [
      'getHeroes',
      'addHero',
    ]);
    heroServiceMock.getHeroes = jasmine.createSpy().and.returnValue(of([]));
    heroServiceMock.addHero = jasmine.createSpy().and.returnValue(of(true));
    notificationServiceMock = jasmine.createSpyObj('NotificationService', [
      'showError',
      'showSuccess',
    ]);

    await TestBed.configureTestingModule({
      declarations: [HeroCreateComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        { provide: HeroService, useValue: heroServiceMock },
        { provide: NotificationService, useValue: notificationServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not create a hero with empty name', () => {
    component.newHero.name = '';
    component.createHero();
    expect(heroServiceMock.addHero).not.toHaveBeenCalled();
    expect(
      (notificationServiceMock as NotificationService).showError
    ).toHaveBeenCalledWith('El nombre del héroe no puede estar en blanco.');
  });

  it('should call addHero when a valid name is provided', () => {
    component.newHero.name = 'Test Hero';
    component.createHero();
    expect(heroServiceMock.addHero).toHaveBeenCalled();
    expect(
      (notificationServiceMock as NotificationService).showSuccess
    ).toHaveBeenCalledWith('Héroe creado con éxito!');
  });
});
