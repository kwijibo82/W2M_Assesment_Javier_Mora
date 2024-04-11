import { NgModule } from '@angular/core';
import { CapitalizeFirstPipe } from '../../pipes/capitalize-first.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CapitalizeFirstPipe],
  imports: [CommonModule],
  exports: [CapitalizeFirstPipe, HttpClientModule],
})
export class SharedModule {}
