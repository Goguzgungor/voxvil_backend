import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guard/auth.guard';
import { CreateUserDto } from '../users/dto/user.dtos';
import { SignInDto } from './db/auth.dtos';
import { ApiTags } from "@nestjs/swagger";

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return await this.authService.registerUser(createUserDto);
  }

  // @UseGuards(AuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
