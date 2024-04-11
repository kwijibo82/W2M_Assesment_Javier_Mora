import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroEditComponent } from './hero-edit.component';
import { HeroEditRoutingModule } from './hero-edit-routing.module';
import { HeroService } from '../../services/hero.service';
import { NotificationService } from '../../services/notification.service';
import { SharedModule } from '../../shared/shared-modules/shared.module';

@NgModule({
  declarations: [
    HeroEditComponent
    
  ],
  providers: [
    {
        provide: HeroService,
        useClass: HeroService,
    },
    NotificationService,
],
  imports: [
    CommonModule,
    FormsModule,
    HeroEditRoutingModule,
    SharedModule
  ],
  exports: [
    HeroEditComponent
  ],
})
export class HeroEditModule {}
