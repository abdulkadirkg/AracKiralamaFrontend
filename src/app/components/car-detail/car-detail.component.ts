import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: Car = new Car();
  rental: Rental = new Rental();
  dataLoaded: boolean = false;

  rentDate: Date;
  returnDate: Date;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private rentalService: RentService
  ) {
    this.rentDate = new Date();
    this.returnDate = new Date();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carID']) {
        this.getCar(params['carID']);
      } else {
        this.toastrService.error('Araç Bulunamadı', 'Hata');
      }
    });
  }
  getCar(ID: number) {
    this.carService.getCarsById(ID).subscribe((response) => {
      this.car = response.data;
      this.dataLoaded = true;
    });
  }

  rentCar(car: Car) {
    this.rental.carId = car.id;
    this.rental.rentDate = this.rentDate;
    this.rental.returnDate = this.returnDate;
    this.rentalService.rent(this.rental).subscribe((response) => {
      this.toastrService.success(response.message);
    });
    console.log(this.rental)
  }
}
