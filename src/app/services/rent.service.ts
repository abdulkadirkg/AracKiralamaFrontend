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
  constructor(private httpClient: HttpClient) {}
  // rent(carId: number): Observable<ListResponseModel<Car>> {
  //   let newPath = this.apiUrl + 'rent?carId?=';
  //   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  // }
  rent(rental:Rental): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/rent?rental=' + rental;
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }
}
