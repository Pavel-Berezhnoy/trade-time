import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  readonly mark: string;
  @IsNotEmpty()
  readonly model: string;
  @IsInt()
  readonly year: number;
  @IsNotEmpty()
  readonly color: string;
  @IsNumber()
  readonly mileage: number;
}
