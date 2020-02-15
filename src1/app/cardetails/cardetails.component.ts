import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {
  cardetails: any[]=[];

  @Input()
  carid: number;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarDetails(this.carid).subscribe((data : any[])=>{
      for (const d of (data as any)) {
        this.cardetails.push({
          id: d.id,
          cardid: d.carid,
          carmodel: d.carmodel,
          cartype: d.cartype,
          mileage: d.mileage,
          fuel: d.fuel,
          transmission: d.transmission,
          price: d.price
        });
      }
    });    
  }
}
