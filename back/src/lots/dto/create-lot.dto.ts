import { CreateVehicleDto } from 'src/vehicle/dto/create-vehicle.dto';
import {
  IsDate,
  IsJSON,
  isJSON,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Transform, TransformPlainToInstance, Type } from 'class-transformer';
import { HasMimeType, IsFiles, MemoryStoredFile } from 'nestjs-form-data';

export class CreateLotDto extends CreateVehicleDto {
  @IsDate()
  @Type(() => Date)
  readonly endTime: Date;

  @IsFiles()
  @HasMimeType(['image/jpeg', 'image/png'], { each: true })
  images: MemoryStoredFile[];

  @Min(0)
  @IsNumber()
  @Type(() => Number)
  readonly startPrice: number;
}
