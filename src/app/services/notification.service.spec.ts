import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { Notification } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should emit a success notification', (done: DoneFn) => {
    service.notification$.subscribe((notification) => {
      if (notification) {
        expect(notification.type).toBe('success');
        expect(notification.message).toBe('Success message');
        done();
      }
    });
    service.showSuccess('Success message');
  });

  it('should emit an error notification', (done: DoneFn) => {
    service.notification$.subscribe((notification) => {
      if (notification) {
        expect(notification.type).toBe('error');
        expect(notification.message).toBe('Error message');
        done();
      }
    });
    service.showError('Error message');
  });

  it('should clear the notification after a delay', fakeAsync(() => {
    let notificationReceived: Notification | null = null;
    service.notification$.subscribe(
      (notification: Notification | null) =>
        (notificationReceived = notification)
    ); 

    service.showSuccess('Success message');
    tick(3000); 
    expect(notificationReceived).toBeNull();
  }));

  it('clearNotification method should clear the notification immediately', () => {
    let notificationReceived: Notification | null = null;
    service.notification$.subscribe(
      (notification) => (notificationReceived = notification)
    );

    service.showSuccess('Success message');
    service.clearNotification();
    expect(notificationReceived).toBeNull();
  });
});
