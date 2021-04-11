import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { RentService } from 'src/app/services/rent.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:string;
  rentalsByUser:Rental[];
  constructor(
    private sharedService:SharedService,
    private rentalService:RentService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.user = this.sharedService.user;
    this.getRentalsByUser();
  }
  getRentalsByUser(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentalsByUser = response.data;
    },error=>{
      this.sharedService.clearToken();
      this.toastrService.error(error.error.Message,"Hata");
    })
  }
  logout(){
    this.sharedService.clearToken();
  }

}
