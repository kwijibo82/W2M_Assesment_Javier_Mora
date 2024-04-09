import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { HeroCreateComponent } from './hero-create.component';
import { HeroService } from '../hero.service';
import { NotificationService } from '../../services/notification.service';

class MockHeroService {
  addHero(hero: any): Observable<any> {
    return of(hero);
  }

  getHeroes(): Observable<any[]> {
    return of([]); 
  }
}

class MockNotificationService {
  showError(message: string): void { }
  showSuccess(message: string): void { }
}

describe('HeroCreateComponent', () => {
  let component: HeroCreateComponent;
  let fixture: ComponentFixture<HeroCreateComponent>;
  let mockHeroService: MockHeroService;
  let mockNotificationService: MockNotificationService;

  beforeEach(async () => {
    mockHeroService = new MockHeroService();
    mockNotificationService = new MockNotificationService();

    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [HeroCreateComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService },
        { provide: NotificationService, useValue: mockNotificationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call addHero on empty name', () => {
    const heroSpy = spyOn(mockHeroService, 'addHero').and.returnValue(of({}));
    const notifySpy = spyOn(mockNotificationService, 'showError');
    component.newHero.name = '';
    component.createHero();
    expect(heroSpy).not.toHaveBeenCalled();
    expect(notifySpy).toHaveBeenCalledWith('El nombre del héroe no puede estar en blanco.');
  });

  it('should call addHero on valid name', () => {
    const heroSpy = spyOn(mockHeroService, 'addHero').and.returnValue(of({}));
    const notifySpy = spyOn(mockNotificationService, 'showSuccess');
    component.newHero.name = 'Valid Name';
    component.createHero();
    expect(heroSpy).toHaveBeenCalled();
    expect(notifySpy).toHaveBeenCalledWith('Héroe creado con éxito!');
  });
});
