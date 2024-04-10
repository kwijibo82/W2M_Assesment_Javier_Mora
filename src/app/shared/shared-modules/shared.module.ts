import { NgModule } from '@angular/core';
import { CapitalizeFirstPipe } from '../../pipes/capitalize-first.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CapitalizeFirstPipe],
<<<<<<< HEAD
  imports: [CommonModule, LoaderComponent],
  exports: [CapitalizeFirstPipe],
=======
  imports: [
    CommonModule, 
  ],
  exports: [CapitalizeFirstPipe]
>>>>>>> recovering_code_v2
})
export class SharedModule {}
