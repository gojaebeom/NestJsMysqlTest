import { Body, Controller, Get, Logger, Post} from '@nestjs/common';
import { ValidationError } from 'joi';
import { UserService } from 'src/user/user.service';
import { Response, ResponseMessage } from 'src/utils/response.util';
import { loginSchema, registerSchema } from './user.schema';
import { Login, Register, UserInfo } from './user.type';
@Controller('users')
export class UsersController {

  constructor(private readonly userService: UserService) {}

  @Post("register")
  public async register(@Body()register : Register) : Promise<Response> {
    try{
      const { value, error } : { value :Register, error ?: ValidationError} = registerSchema.validate(register);
      
      if(error){
        Logger.error(error);
        return new ResponseMessage().error(999).body("Parmeter Error").build();
      }

      const user : UserInfo = await this.userService.register(value);

      return new ResponseMessage().success().body(user).build();
    
    }catch(e){
      Logger.error(e);
    }

  }

  @Post("login")
  public async login(@Body() login : Login):Promise<Response>{
    const { value , error } : { value : Login , error?: ValidationError} = loginSchema.validate(login);

    if(error){
      Logger.error(error);
      return new ResponseMessage().error(999).body("Parameter Error").build();
    }

    const user = await this.userService.login(value);

    if(!user){
      return new ResponseMessage().error(999, "Login Error").build();
    }

    return new ResponseMessage().success().body(user).build();
  }
}
