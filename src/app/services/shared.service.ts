import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Rental } from '../models/rental';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  selectedCar: Car;
  baseUrl: string = 'https://localhost:44389/api/';
  selectedRental:Rental;
  user:string = localStorage.getItem('user') ?? undefined;
  token:string = localStorage.getItem('token') ?? undefined;
  constructor() {}
}
