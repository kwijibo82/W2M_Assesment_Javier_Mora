import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list.component';
import { SharedModule } from '../../shared/shared-modules/shared.module'; 
import { HeroListRoutingModule } from './hero-list-routing.module';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { CapitalizeFirstPipe } from '../../pipes/capitalize-first.pipe';

@NgModule({
  declarations: [HeroListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HeroListRoutingModule, 
    LoaderComponent
  ],
  exports: [HeroListComponent]
})
export class HeroListModule { }
