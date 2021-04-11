import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private router:Router,
    private toastr:ToastrService) {}
  clearToken(){
    this.user = undefined;
    localStorage.clear();
    this.toastr.success("Çıkış Yapıldı");
    this.router.navigate(['']);
  }
}
