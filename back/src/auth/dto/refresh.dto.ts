import { IsNotEmpty } from 'class-validator';

export default class {
  @IsNotEmpty()
  readonly refreshToken: string;
}
