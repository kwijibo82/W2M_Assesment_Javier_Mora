import { NgModule } from '@angular/core';
import { CapitalizeFirstPipe } from '../../heroes/pipes/capitalize-first.pipe';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@NgModule({
  declarations: [CapitalizeFirstPipe],
  imports: [
    CommonModule, 
    LoaderComponent
  ],
  exports: [CapitalizeFirstPipe]
})
export class SharedModule { }