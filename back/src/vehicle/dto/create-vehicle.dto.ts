import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  readonly mark: string;
  @IsNotEmpty()
  readonly model: string;
  @IsInt()
  @Type(() => Number)
  readonly year: number;
  @IsNotEmpty()
  readonly color: string;
  @IsNumber()
  @Type(() => Number)
  readonly mileage: number;
}
