import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';
import { Car } from '../models/car';

@Pipe({
  name: 'filterBrand',
  pure: false
})
export class FilterBrandPipe implements PipeTransform {
  transform(value: Car[], brands: Brand[]): Car[] {
    return brands.length>0
      ? value.filter((c) => brands.find((b) => b.id === c.brandID))
      : value;
  }
}
