import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Rental } from '../models/rental';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  selectedCar: Car;
  baseUrl: string = 'https://localhost:44389/api/auth/';
  selectedRental:Rental;
  user:string = undefined;
  constructor() {}
}
