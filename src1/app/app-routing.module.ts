import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsModule } from './cars/cars.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cars'},
  {path: 'cars' , loadChildren: () => CarsModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
