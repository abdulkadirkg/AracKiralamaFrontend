import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PaymentComponent } from '../components/payment/payment.component';
import { AuthService } from '../services/auth.service';
import { RentService } from '../services/rent.service';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentGuard implements CanActivate {
  constructor(
    private rentalService: RentService,
    private toastrService: ToastrService,
    private router: Router,
    private sharedService:SharedService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.sharedService.selectedCar &&
        this.sharedService.selectedRental.rentDate !== undefined &&
        this.sharedService.selectedRental.returnDate !== undefined

      ) {
      return true;
    } else {
      // this.router.navigate(['']);
      this.toastrService.error('Araç Seçim Formu Eksik veya Hatalı','HATA');
      return false;
    }
  }
}
