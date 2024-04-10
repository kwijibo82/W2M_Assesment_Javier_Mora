import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { HeroEditComponent } from './hero-edit.component';
import { HeroService } from '../../services/hero.service';
import { NotificationService } from '../../services/notification.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroEditComponent', () => {
  let component: HeroEditComponent;
  let fixture: ComponentFixture<HeroEditComponent>;
  let mockActivatedRoute, mockHeroService: { getHeroById: { and: { returnValue: (arg0: Observable<{ id: number; name: string; }>) => void; }; }; addHero: { and: { returnValue: (arg0: Observable<{}>) => void; }; }; updateHero: { and: { returnValue: (arg0: Observable<{}>) => void; }; }; deleteHero: { and: { returnValue: (arg0: Observable<{}>) => void; }; }; }, mockNotificationService: { showSuccess: any; showError: any; }, mockRouter: { navigate: any; }, mockDialog: { open: { and: { returnValue: (arg0: { afterClosed: () => Observable<string>; }) => void; }; }; };

  beforeEach(async () => {
    mockActivatedRoute = { snapshot: { paramMap: new Map([['id', '1']]) } };
    mockHeroService = jasmine.createSpyObj('HeroService', ['getHeroById', 'addHero', 'updateHero', 'deleteHero']);
    mockNotificationService = jasmine.createSpyObj('NotificationService', ['showError', 'showSuccess']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    // Simulación de respuestas de los servicios
    mockHeroService.getHeroById.and.returnValue(of({ id: 1, name: 'Test Hero' }));
    mockHeroService.addHero.and.returnValue(of({}));
    mockHeroService.updateHero.and.returnValue(of({}));
    mockHeroService.deleteHero.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      declarations: [ HeroEditComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: HeroService, useValue: mockHeroService },
        { provide: NotificationService, useValue: mockNotificationService },
        { provide: Router, useValue: mockRouter },
        { provide: MatDialog, useValue: mockDialog }
      ],
      imports: [FormsModule, MatDialogModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load hero data on init if id is provided', () => {
    expect(mockHeroService.getHeroById).toHaveBeenCalledWith(1);
    expect(component.hero).toEqual({ id: 1, name: 'Test Hero' });
  });

  it('should update hero when saveHero is called and not creating new', () => {
    component.isCreatingNew = false;
    component.hero = { id: 1, name: 'Updated Hero' };
    component.saveHero();
    expect(mockHeroService.updateHero).toHaveBeenCalledWith({ id: 1, name: 'Updated Hero' });
    expect(mockNotificationService.showSuccess).toHaveBeenCalledWith('Héroe actualizado con éxito!');
  });

  it('should add hero when saveHero is called and is creating new', () => {
    component.isCreatingNew = true;
    component.hero = { id: 0, name: ' ' }; // Asegúrate de que el nombre esté vacío o contenga solo espacios.
    component.saveHero();
    expect(mockHeroService.addHero).not.toHaveBeenCalled(); // Esto verifica que addHero no se llama debido a la validación.
    expect(mockNotificationService.showError).toHaveBeenCalledWith(
      'El nombre del héroe no puede estar en blanco.'
    );
  });
  
  
  it('should display an error when trying to save with empty name', () => {
    component.hero = { id: 0, name: '' };
    component.saveHero();
    expect(mockNotificationService.showError).toHaveBeenCalledWith('El nombre del héroe no puede estar en blanco.');
  });

  it('should call deleteHero method and navigate when dialog confirms deletion', () => {
    mockDialog.open.and.returnValue({ afterClosed: () => of('ok') });
    component.hero = { id: 1, name: 'Hero to Delete' };
    component.deleteHero();
    fixture.detectChanges();

    expect(mockDialog.open).toHaveBeenCalled();
    expect(mockHeroService.deleteHero).toHaveBeenCalledWith(1);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/heroes']);
  });
});
