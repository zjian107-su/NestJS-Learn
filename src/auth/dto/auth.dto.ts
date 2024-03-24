import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  // validator decorators for email
  @IsEmail()
  @IsNotEmpty()
  email: string;

  // validator decorators for password
  @IsString()
  @IsNotEmpty()
  password: string;
}
