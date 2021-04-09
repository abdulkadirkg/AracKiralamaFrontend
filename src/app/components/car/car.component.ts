import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { EventService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  filteredBrands: Brand[] = [];

  dataLoaded: boolean = false;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carID']) {
        this.getCarsById(params['carID']);
      } else {
        this.on();
        this.getCars();
      }
    });
  }

  on() {
    this.eventService.on<Brand[]>().subscribe((data) => {
      this.filteredBrands = data;
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      (this.cars = response.data), (this.dataLoaded = true);
    });
  }

  getCarsById(carId: number) {
    this.carService.getCarsById(carId).subscribe((response) => {
      (this.cars[0] = response.data), (this.dataLoaded = true);
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  removeFromFiltered(brand: Brand) {
    this.filteredBrands.splice(this.filteredBrands.indexOf(brand), 1);
    console.log(this.filteredBrands);
    this.on();
  }
}
