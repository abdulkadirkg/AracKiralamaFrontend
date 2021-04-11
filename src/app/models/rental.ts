import { Car } from './car';
import { CarImage } from './carImages';

export class Rental {
  carId: number;
  customerId: number;
  rentDate: Date;
  returnDate: Date;
  car: Car;
  carJSON: string;

  brandID: number;
  brandName: string;
  carID: number;
  carImages: CarImage[];
  carName: string;
  colorID: number;
  colorName: string;
  customerID: number;
  dailyPrice: number;
  description: string;
  id: number;
  modelYear: number;
}
