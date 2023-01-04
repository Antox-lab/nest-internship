import { Injectable } from '@nestjs/common';
import { Users } from './users.interface';
import { CreateUserDto } from './dto/create.dto';
import { FindUserDto } from './dto/find.dto';
import { FindIdUserDto } from './dto/findId.dto';
import { UpdateUserDto } from './dto/update.dto';

@Injectable()
export class UsersService {
  private users: Users[] = [
    {
      id: 454535,
      firstName: 'Anton',
      lastName: 'Shvets',
      email: 'as@as.com',
      password: 'none',
    },
    {
      id: 674213,
      firstName: 'Ich',
      lastName: 'Bin',
      email: 'ib@ib.com',
      password: 'none',
    },
  ];

  getUsers(): Users[] {
    return this.users;
  }

  createUser(createUserDto: CreateUserDto): Users {
    const user: Users = {
      id: Date.now(),
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      password: createUserDto.password,
    };

    this.users.push(user);

    return user;
  }

  findUser(findUserDto: FindUserDto): Users[] {
    return this.users.filter(
      (item) => item.firstName === findUserDto.firstName,
    );
  }

  findUserById(findIdUserDto: FindIdUserDto): Users[] {
    return this.users.filter((item) => item.id === findIdUserDto.id);
  }

  updateUserById(updateUserDto: UpdateUserDto): Users[] {
    this.users = this.users.map((item) => {
      if (updateUserDto.id === item.id) {
        item.firstName = updateUserDto.firstName;
        item.lastName = updateUserDto.lastName;
        item.email = updateUserDto.email;
        item.password = updateUserDto.password;
      }
      return item;
    });

    return this.users;
  }

  deleteUserById(findIdUserDto: FindIdUserDto): Users[] {
    const index = this.users.findIndex(function (item) {
      return item.id == findIdUserDto.id;
    });

    if (index > -1) {
      this.users.splice(index, 1);
    }

    return this.users;
  }
}
