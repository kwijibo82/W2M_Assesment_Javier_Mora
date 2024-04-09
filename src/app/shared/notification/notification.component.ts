import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf, AsyncPipe } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, NgIf, AsyncPipe],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) {}
}
