import { Injectable} from '@nestjs/common';

import { User } from 'src/user/entitiy/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository : UserRepository
  ){}


  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}