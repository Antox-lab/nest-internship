import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateUserDto } from './create.dto';

export class UpdateUserDto extends CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
