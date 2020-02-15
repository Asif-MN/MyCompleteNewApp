import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardetailsComponent } from './cardetails.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardetailsComponent],
  exports: [CardetailsComponent]
})

export class CardetailsModule { }