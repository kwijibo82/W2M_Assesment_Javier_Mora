import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
=======

@NgModule({
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
>>>>>>> recovering_code_v2
  providers: [],
})
export class AppModule {}
