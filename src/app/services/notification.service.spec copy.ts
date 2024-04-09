import { TestBed } from '@angular/core/testing';
import { NotificationService, Notification } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit success notification', (done: DoneFn) => {
    const testMessage = 'Success message';
    service.notification$.subscribe((notification: Notification | null) => {
      if (notification) {
        expect(notification.type).toBe('success');
        expect(notification.message).toBe(testMessage);
        done();
      }
    });

    service.showSuccess(testMessage);
  });

  it('should emit error notification', (done: DoneFn) => {
    const testMessage = 'Error message';
    service.notification$.subscribe((notification: Notification | null) => {
      if (notification) {
        expect(notification.type).toBe('error');
        expect(notification.message).toBe(testMessage);
        done();
      }
    });

    service.showError(testMessage);
  });

  it('should clear notification after delay', (done: DoneFn) => {
    const testMessage = 'Message to clear';
    service.showSuccess(testMessage);

    setTimeout(() => {
      service.notification$.subscribe((notification: Notification | null) => {
        expect(notification).toBeNull();
        done();
      });
    }, 3000 + 100);
  });
});
