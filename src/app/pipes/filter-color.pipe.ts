import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { Color } from '../models/color';

@Pipe({
  name: 'filterColor',
  pure: false,
})
export class FilterColorPipe implements PipeTransform {
  transform(value: Car[], colors: Color[]): Car[] {
    return colors.length > 0
      ? value.filter((c) => colors.find((b) => b.id === c.colorID))
      : value;
  }
}
