import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  apiUrl = 'https://localhost:44389/api/';
  rental:Rental;
  constructor(private httpClient: HttpClient) {}
  rent(rental: Rental): Observable<ResponseModel> {
    let newRental = new Rental();
    newRental.carId = Number(rental.carId);
    newRental.rentDate = new Date(rental.rentDate);
    newRental.returnDate = new Date(rental.returnDate);
    newRental.customerId = rental.customerId;
    let newPath = this.apiUrl + 'rentals/rent';
    this.rental = newRental;
    return this.httpClient.post<ResponseModel>(newPath, newRental);
  }
  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + 'rentals/getbycustomer';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}
