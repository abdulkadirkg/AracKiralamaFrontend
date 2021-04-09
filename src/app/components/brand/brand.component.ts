import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { EventService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  selectedBrands:Brand[]=[];
  constructor(
    private brandService: BrandService,
    private eventService:EventService
  ) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    return this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  selectBrand(brand:Brand){
    this.selectedBrands.push(brand);
    this.emitBrands();
  }
  
  emitBrands(){
    this.eventService.emit<Brand[]>(this.selectedBrands);
  }
}
