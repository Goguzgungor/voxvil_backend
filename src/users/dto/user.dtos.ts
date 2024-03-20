import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, Length, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    required: false,
    default: '0xec2539400BB79aA7cc2a028B1031bcb1CAb575D0',
  })
  @IsString()
  @IsOptional()
  wallet_address: string;

  @ApiProperty({
    required: false,
    default: 'ALTINTEPSİ MAH. UYGUR CADDESİ NO:2/1 BAYRAMPAŞA',
  })
  @IsString()
  @IsOptional()
  @Length(5, 100)
  street_address: string;


  @ApiProperty({
    required: false,
    default: 'Some notes here',
  })
  @IsString()
  @IsOptional()
  notes: string;

  @ApiProperty({
    required: false,
    default: 'twitter_username',
  })
  @IsString()
  @IsOptional()
  twitter: string;

  @ApiProperty({
    required: false,
    default: 'discord_username',
  })
  @IsString()
  @IsOptional()
  discord: string;

  @ApiProperty({
    required: false,
    default: '+1234567890',
  })
  @IsString()
  @IsPhoneNumber()
  @IsOptional()
  phone_number: string;

  @ApiProperty({
    required: false,
    default: 'John Doe',
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    required: false,
    default: 'example@gmail.com',
  })
  @IsString()
  @IsOptional()
  email: string;
}

export class UpdateUserDto {
  @ApiProperty({
    required: false,
    default: '0xec2539400BB79aA7cc2a028B1031bcb1CAb575D0',
  })
  @IsString()
  @IsOptional()
  wallet_address: string;

  @ApiProperty({
    required: false,
    default: 'ALTINTEPSİ MAH. UYGUR CADDESİ NO:2/1 BAYRAMPAŞA',
  })
  @IsString()
  @IsOptional()
  @Length(5, 100)
  street_address: string;

  @ApiProperty({
    required: false,
    default: 'Some notes here',
  })
  @IsString()
  @IsOptional()
  notes: string;

  @ApiProperty({
    required: false,
    default: 'twitter_username',
  })
  @IsString()
  @IsOptional()
  twitter: string;

  @ApiProperty({
    required: false,
    default: 'discord_username',
  })
  @IsString()
  @IsOptional()
  discord: string;

  @ApiProperty({
    required: false,
    default: '+1234567890',
  })
  @IsString()
  @IsPhoneNumber()
  @IsOptional()
  phone_number: string;

  @ApiProperty({
    required: false,
    default: 'John Doe',
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    required: false,
    default: 'example@gmail.com',
  })
  @IsString()
  @IsOptional()
  email: string;
}
