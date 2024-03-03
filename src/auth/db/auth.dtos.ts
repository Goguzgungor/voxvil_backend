import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    required: false,
    default: '0xec2539400BB79aA7cc2a028B1031bcb1CAb575D0',
  })
  @IsString()
  @IsOptional()
  wallet_address: string;

  @ApiProperty({
    required: false,
    default: 'Aes Hashed Version of the Wallet Address',
  })
  @IsString()
  @IsOptional()
  aes_hashed: string;
}
