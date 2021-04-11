import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  user:string;
  constructor(
    private sharedService:SharedService
  ) { }

  ngOnInit(): void {
    this.user = this.sharedService.user;
  }

}
