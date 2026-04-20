import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  declare email: string;

  @IsString()
  @IsNotEmpty()
  declare password: string;

  @IsString()
  declare username: string;
}

export class VerifyOtpDto {
  @IsEmail()
  declare email: string;

  @IsString()
  @IsNotEmpty()
  declare otp: string;
}

export class LoginDto {
  @IsEmail()
  declare email: string;

  @IsString()
  @IsNotEmpty()
  declare password: string;
}
