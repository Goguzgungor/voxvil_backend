import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({ example: 'Ethereum' })
  @IsString()
  @IsOptional()
  chain_name?: string;

  @ApiProperty({ example: 'MyBrand' })
  @IsString()
  @IsOptional()
  name?: string;
}

export class BrandDto {
  @ApiProperty({ example: '0x1234567890abcdef' })
  @IsString()
  @IsOptional()
  wallet_address?: string;

  @ApiProperty({ example: 'Ethereum' })
  @IsString()
  @IsOptional()
  chain_name?: string;

  @ApiProperty({ example: 'MyBrand' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'secret_key' })
  @IsString()
  @IsOptional()
  secret_key?: string;
}
