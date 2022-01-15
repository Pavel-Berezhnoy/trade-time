import { CreateVehicleDto } from 'src/vehicle/dto/create-vehicle.dto';
import { IsDate, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLotDto {
  @ValidateNested()
  @IsNotEmpty()
  @Type(() => CreateVehicleDto)
  readonly vehical: CreateVehicleDto;

  @IsDate()
  @Type(() => Date)
  readonly endTime: Date;

  @IsNumber()
  readonly startPrice: number;
}
