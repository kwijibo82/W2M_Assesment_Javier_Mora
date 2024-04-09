import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroEditComponent } from './hero-edit.component';
import { HeroEditRoutingModule } from './hero-edit-routing.module';

@NgModule({
  declarations: [HeroEditComponent],
  imports: [CommonModule, FormsModule, HeroEditRoutingModule],
  exports: [HeroEditComponent],
})
export class HeroEditModule {}
