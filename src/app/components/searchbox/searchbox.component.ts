import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
})
export class SearchboxComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded: boolean = false;
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCarTypes();
  }

  getCarTypes() {
    this.carService.getCars().subscribe((response) => {
      (this.cars = response.data), (this.dataLoaded = true);
    });
  }
  
}
