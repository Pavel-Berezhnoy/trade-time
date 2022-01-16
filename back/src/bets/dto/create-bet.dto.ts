import { IsInt, IsNumber } from 'class-validator';

export default class CreateBetDto {
  @IsNumber()
  price: number;
  @IsInt()
  lotId: number;
}
