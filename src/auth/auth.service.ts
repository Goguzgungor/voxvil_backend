import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AES, enc } from 'crypto-ts';
import { aesSecretKey } from '../core/helpers/constants';
import { CreateUserDto } from '../users/dto/user.dtos';
import { SignInDto } from './db/auth.dtos';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<{ access_token: string }> {
    if (!this.verifyAes(signInDto.wallet_address, signInDto.aes_hashed)) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: 'This is a token for voxvil_backend',
      username: signInDto.wallet_address,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async registerUser(createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }
  verifyAes(request_wallet_address: string, request_aes: string): boolean {
    const walletAddress = AES.decrypt(
      request_aes,
      aesSecretKey.secret,
    ).toString(enc.Utf8);
    return walletAddress === request_wallet_address;
  }
}
