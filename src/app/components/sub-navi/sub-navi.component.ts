import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sub-navi',
  templateUrl: './sub-navi.component.html',
  styleUrls: ['./sub-navi.component.css'],
})
export class SubNaviComponent implements OnInit {
  user: string;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.user = this.sharedService.user;
  }
}
