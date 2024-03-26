import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JtwGuard } from 'src/auth/guard';

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
