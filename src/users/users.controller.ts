import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Patch, Post, UsePipes } from '@nestjs/common/decorators';
import { CreateUserDto } from './dto/create.dto';
import { FindUserDto } from './dto/find.dto';
import { FindIdUserDto } from './dto/findId.dto';
import { UpdateUserDto } from './dto/update.dto';
import { Users, FindUser, FindId } from './users.interface';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  get(): Users[] {
    return this.userService.getUsers();
  }

  @Post('/add')
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto): Users {
    return this.userService.createUser(createUserDto);
  }

  @Post('/find')
  @UsePipes(ValidationPipe)
  find(@Body() findUserDto: FindUserDto): FindUser[] {
    return this.userService.findUser(findUserDto);
  }

  @Post('/findId')
  @UsePipes(ValidationPipe)
  findId(@Body() findIdUserDto: FindIdUserDto): FindId[] {
    return this.userService.findUserById(findIdUserDto);
  }

  @Patch('/update')
  @UsePipes(ValidationPipe)
  update(@Body() updateUserDto: UpdateUserDto): Users[] {
    return this.userService.updateUserById(updateUserDto);
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  delete(@Body() findIdUserDto: FindIdUserDto): Users[] {
    return this.userService.deleteUserById(findIdUserDto);
  }
}
