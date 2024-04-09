import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NotificationComponent } from './notification.component';
import { NotificationService } from '../../services/notification.service';
import { BehaviorSubject } from 'rxjs';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let mockNotificationService: Partial<NotificationService>;
  let notificationSubject: BehaviorSubject<{
    type: 'success' | 'error';
    message: string;
  } | null>;

  beforeEach(async () => {
    notificationSubject = new BehaviorSubject<{
      type: 'success' | 'error';
      message: string;
    } | null>(null);
    mockNotificationService = {
      notification$: notificationSubject.asObservable(),
    };

    await TestBed.configureTestingModule({
      imports: [NotificationComponent], // Usar el componente como standalone aquí
      providers: [
        { provide: NotificationService, useValue: mockNotificationService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a success notification', () => {
    notificationSubject.next({
      type: 'success',
      message: 'Test Success Message',
    });
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.notification-success').textContent
    ).toContain('Test Success Message');
  });

  it('should display an error notification', () => {
    notificationSubject.next({ type: 'error', message: 'Test Error Message' });
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.notification-error').textContent).toContain(
      'Test Error Message'
    );
  });

  it('should not display any notification if there is none', () => {
    notificationSubject.next(null);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.notification-success')).toBeNull();
    expect(compiled.querySelector('.notification-error')).toBeNull();
  });
});
