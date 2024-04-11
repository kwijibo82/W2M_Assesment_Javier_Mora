import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCreateComponent } from './hero-create.component';
import { FormsModule } from '@angular/forms';
import { HeroCreateRoutingModule } from './hero-create-routing.module';
import { SharedModule } from '../../shared/shared-modules/shared.module';
import { HeroService } from '../../services/hero.service';

@NgModule({
  declarations: [HeroCreateComponent],
  providers: [
    {
      provide: HeroService,
      useClass: HeroService,
    },
  ],
  imports: [CommonModule, FormsModule, HeroCreateRoutingModule, SharedModule],
})
export class HeroCreateModule {}
