import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { RentService } from 'src/app/services/rent.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: Car = new Car();
  dataLoaded: boolean = false;
  rentDate: Date;
  returnDate: Date;
  valid:Boolean = true;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private rentalService: RentService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carID']) {
        this.getCar(params['carID']);
        this.sharedService.selectedCar = this.car;
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

  goPayment(car: Car) {
    let rental = new Rental();
    rental.carId = car.id;
    rental.rentDate = this.rentDate;
    rental.returnDate = this.returnDate;
    rental.car = car;
    rental.carJSON = JSON.stringify(car);
    this.sharedService.selectedRental = rental;
    console.log(this.sharedService.selectedRental);
    // this.router.navigateByUrl("/payment",{state:rental});
    this.router.navigate(['/payment'], { queryParams: rental });
  }
}
