import { NgModule } from '@angular/core';
import { CapitalizeFirstPipe } from '../../pipes/capitalize-first.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CapitalizeFirstPipe],
  imports: [
    CommonModule, 
  ],
  exports: [CapitalizeFirstPipe]
})
export class SharedModule {}
