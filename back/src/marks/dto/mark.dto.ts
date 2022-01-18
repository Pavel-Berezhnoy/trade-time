import { IsNotEmpty } from 'class-validator';

export class MarkDto {
  @IsNotEmpty()
  name: string;
}
