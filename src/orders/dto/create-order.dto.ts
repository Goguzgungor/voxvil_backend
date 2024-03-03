import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsOptional()
  vox_users_id?: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsOptional()
  asset_id?: number;

  @ApiProperty({ example: '0x1234567890abcdef' })
  @IsString()
  @IsOptional()
  to_address?: string;

  @ApiProperty({ example: 'pending' })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({ example: '2024-02-29T12:34:56' })
  @IsDateString()
  @IsOptional()
  order_at?: Date;
}
