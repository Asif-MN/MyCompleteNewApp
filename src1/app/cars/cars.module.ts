import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import {CardetailsModule} from '../cardetails/cardetails.module';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    CardetailsModule
  ],
  declarations: [CarsComponent]
})
export class CarsModule { }