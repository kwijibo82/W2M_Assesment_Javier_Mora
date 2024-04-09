import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCreateComponent } from './hero-create.component';
import { FormsModule } from '@angular/forms';
import { HeroCreateRoutingModule } from './hero-create-routing.module';

@NgModule({
  declarations: [ 
    HeroCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroCreateRoutingModule
  ]
})
export class HeroCreateModule { }
