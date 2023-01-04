import { IsNumber, IsNotEmpty } from 'class-validator';

export class FindIdUserDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
