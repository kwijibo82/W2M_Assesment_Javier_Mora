import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  type: 'success' | 'error';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  static showError() {
    throw new Error('Method not implemented.');
  }
  private notificationSource = new BehaviorSubject<Notification | null>(null);
  public notification$ = this.notificationSource.asObservable();

  constructor() {}

  showSuccess(message: string): void {
    this.notificationSource.next({ type: 'success', message });
    setTimeout(() => this.clearNotification(), 3000);
  }

  showError(message: string): void {
    this.notificationSource.next({ type: 'error', message });
    setTimeout(() => this.clearNotification(), 3000);
  }

  clearNotification(): void {
    this.notificationSource.next(null);
  }
}
