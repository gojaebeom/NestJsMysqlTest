import { Injectable} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { Login, Register, UserInfo } from './user.type';

import * as Bcryt from 'bcryptjs';
import { Token } from 'src/utils/token.util';
import { User } from './entitiy/user.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository : UserRepository
  ){}

  public async register(register:Register):Promise<UserInfo>{
    const registerUser = await this.userRepository.create();

    //Encode User Password
    const salt : string = await Bcryt.genSalt(10);
    const password : string = await Bcryt.hash(register.password, salt);

    registerUser.account = register.account;
    registerUser.email = register.email;
    registerUser.name = register.name;
    registerUser.uuid = Token.getUUID();
    registerUser.password = password;
    registerUser.phone = register.phone;

    const user = await this.userRepository.save(registerUser);
    const userInfo : UserInfo = {
      email : user.email,
      name : user.name,
      uuid : user.uuid
    }

    return userInfo;
  }

  public async login(loginUser : Login):Promise<UserInfo>{

    const user : User = await this.userRepository.findOne({
      where:{
        email:loginUser.email
      }
    });

    await this.userRepository.save(user);

    const userInfo : UserInfo = {
        email : user.email,
        name : user.name, 
        uuid : user.uuid
    }

    return userInfo;
  }
}