import { CarImage } from "./carImages";

export class Car {
  id?: number;
  brandId?: number;
  colorID?: number;
  carName?:string;
  brandName?:string;
  colorName?:string;
  modelYear?: number;
  dailyPrice?: number;
  description?: string;
  carImages?:CarImage[];
}
