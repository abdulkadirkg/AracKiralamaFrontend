import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private httpClient:HttpClient) {}
  apiUrl:"";
  pay(rental: Payment): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/rent?rental=' + rental;
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }
  
}
