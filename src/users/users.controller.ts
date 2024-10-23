// src/users/users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async register(@Body() userDto: { username: string; password: string; role: string }) {
    return this.usersService.createUser(userDto.username, userDto.password, userDto.role);
  }
}
