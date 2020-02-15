import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  API_URL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { 
  }

  getCars(){	
    return this.http.get(this.API_URL + 'cars')
  }

  getCarDetails(carid){
    return this.http.get(this.API_URL + 'cardetails/?carid=' + carid)
  }
}
