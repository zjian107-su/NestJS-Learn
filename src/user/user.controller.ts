import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { JtwGuard } from '../auth/guard/jwt.guard';

@UseGuards(JtwGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User, @GetUser('email') email: string) {
    console.log('email', email);
    return user;
  }

  @Patch()
  editProfile() {}
}
