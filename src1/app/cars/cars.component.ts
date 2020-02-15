import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: any[]=[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe((data : any[])=>{
      for (const d of (data as any)) {
        this.cars.push({
          id: d.id,
          name: d.name,
          url: d.url
        });
      }
    });    
  }
}
