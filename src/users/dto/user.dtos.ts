import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, Length } from 'class-validator';

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
    default: '0x32c23bc539400BB79aA7cc2a028Bc21315123',
  })
  @IsString()
  @IsOptional()
  nft_address: string;
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
    default: '0x32c23bc539400BB79aA7cc2a028Bc21315123',
  })
  @IsString()
  @IsOptional()
  nft_address: string;
}
