import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgPaymentCardModule } from 'ng-payment-card';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { RentService } from 'src/app/services/rent.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  rental: Rental;
  car:Car;
  creditCard:Payment = new Payment();
  constructor(
    private rentalService: RentService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {
      // this.rental = <Rental>this.router.getCurrentNavigation().extras.state;
  }
  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe((params) => {
        this.rental = <Rental>params;
        this.car = JSON.parse(this.rental.carJSON);
      });
  }
  rentCar() {
    this.rentalService.rent(this.rental).subscribe(
      (response) => {
        this.toastrService.success(response.message);
      },
      (responseError) => {
        console.log(responseError);
        if (responseError.error.message) {
          this.toastrService.error(
            responseError.error.message,
            'Doğrulama hatası'
          );
        }
      }
    );
  }
}
