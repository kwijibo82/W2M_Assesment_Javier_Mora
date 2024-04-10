import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HeroCreateComponent } from './hero-create.component';
import { HeroService } from '../../services/hero.service';
import { NotificationService } from '../../services/notification.service';

<<<<<<< HEAD
class MockHeroService {
  addHero(hero: unknown): Observable<unknown> {
    return of(hero);
  }
}

class MockNotificationService {
  showError(message: string): void {}
  showSuccess(message: string): void {}
}

=======
>>>>>>> recovering_code_v2
describe('HeroCreateComponent', () => {
  let component: HeroCreateComponent;
  let fixture: ComponentFixture<HeroCreateComponent>;
  let heroServiceMock: any;
  let notificationServiceMock: any;

  beforeEach(async () => {
    heroServiceMock = jasmine.createSpyObj('HeroService', ['getHeroes', 'addHero']);
    heroServiceMock.getHeroes.and.returnValue(of([]));
    heroServiceMock.addHero.and.returnValue(of(true));
    notificationServiceMock = jasmine.createSpyObj('NotificationService', ['showError', 'showSuccess']);

    await TestBed.configureTestingModule({
      declarations: [ HeroCreateComponent ],
      imports: [ FormsModule, RouterTestingModule ],
      providers: [
<<<<<<< HEAD
        { provide: HeroService, useValue: mockHeroService },
        { provide: NotificationService, useValue: mockNotificationService },
      ],
=======
        { provide: HeroService, useValue: heroServiceMock },
        { provide: NotificationService, useValue: notificationServiceMock }
      ]
>>>>>>> recovering_code_v2
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
<<<<<<< HEAD
    expect(heroSpy).not.toHaveBeenCalled();
    expect(notifySpy).toHaveBeenCalledWith(
      'El nombre del héroe no puede estar en blanco.'
    );
=======
    expect(heroServiceMock.addHero).not.toHaveBeenCalled();
    expect(notificationServiceMock.showError).toHaveBeenCalledWith('El nombre del héroe no puede estar en blanco.');
>>>>>>> recovering_code_v2
  });

  it('should call addHero when a valid name is provided', () => {
    component.newHero.name = 'Test Hero';
    component.createHero();
    expect(heroServiceMock.addHero).toHaveBeenCalled();
    expect(notificationServiceMock.showSuccess).toHaveBeenCalledWith('Héroe creado con éxito!');
  });
});
