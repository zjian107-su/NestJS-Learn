import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  test() {
    console.log('Daniel');
  }

  signup() {
    return { message: 'user signed up' };
  }

  signin() {
    return { message: 'user signed in' };
  }

  signout() {
    return { message: 'user signed out' };
  }
}
