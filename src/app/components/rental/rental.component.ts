import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rental:Rental;
  constructor() { }

  ngOnInit(): void {
  }
  rent(){
    
  }

}
