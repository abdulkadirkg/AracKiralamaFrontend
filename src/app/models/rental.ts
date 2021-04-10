import { Car } from "./car";

export class Rental {
  carId: number;
  customerId: number;
  rentDate: Date;
  returnDate: Date;
  car: Car;
  carJSON: string;
}
