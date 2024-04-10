import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationComponent } from './notification.component';
import { NotificationService } from '../../services/notification.service';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let notificationService: NotificationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationComponent, CommonModule],
      providers: [NotificationService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    notificationService = TestBed.inject(NotificationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a success notification', () => {
    notificationService.showSuccess('Success message');
    fixture.detectChanges();
    const messageElement = fixture.debugElement.query(By.css('.notification-success'));
    expect(messageElement).toBeTruthy();
    expect(messageElement.nativeElement.textContent).toContain('Success message');
  });


  let notificationSubject: Subject<any>;

  it('should display an error notification', () => {
    notificationService.showError('Error message');
    fixture.detectChanges();
    const messageElement = fixture.debugElement.query(By.css('.notification-error'));
    expect(messageElement).toBeTruthy();
    expect(messageElement.nativeElement.textContent).toContain('Error message');
  });

  it('should not display any notification if there is none', () => {
    fixture.detectChanges(); 
    const notificationElement = fixture.debugElement.query(By.css('.notification'));
    expect(notificationElement).toBeNull();
  });
  
  
});
