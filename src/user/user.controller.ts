import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JtwGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
  @UseGuards(JtwGuard)
  @Get('me')
  getMe(@Req() req: Request) {
    return req.user;
  }

  // @Get()
  // getAll() {
  //   return 'all users';
  // }
}
