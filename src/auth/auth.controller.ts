import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(
    @Body() dto: AuthDto,

    // @Body('email') email: string,
    // @Body('password', ParseIntPipe) password: string, // pipe into number
  ) {
    console.log({ dto });

    // console.log({
    //   email,
    //   typeOfEmail: typeof email,
    //   password,
    //   typeOfPassword: typeof password,
    // });

    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }

  @Post('signout')
  signout() {
    return this.authService.signout();
  }
}
