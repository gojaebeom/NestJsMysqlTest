import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from './entitiy/user.entity';
@Controller('users')
export class UsersController {

  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
}
