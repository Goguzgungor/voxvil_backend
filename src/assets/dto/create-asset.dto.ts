import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt, IsNumber, IsDateString, IsDecimal } from 'class-validator';

export class CreateAssetDto {
  @ApiProperty({ example: 10 })
  @IsInt()
  @IsOptional()
  quantity?: number;

  @ApiProperty({ example: 'Electronics' })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({ example: '2024-02-29T12:34:56' })
  @IsDateString()
  @IsOptional()
  created_at?: Date;

  @ApiProperty({ example: 'Description of the asset' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 1.5 })
  @IsDecimal()
  @IsOptional()
  weight?: number;

  @ApiProperty({ example: 100 })
  @IsDecimal()
  @IsOptional()
  price?: number;

  @ApiProperty({ example: 'ManufacturerName' })
  @IsString()
  @IsOptional()
  manufacturer?: string;

  @ApiProperty({ example: 'SupplierName' })
  @IsString()
  @IsOptional()
  supplier?: string;

  @ApiProperty({ example: 'In Stock' })
  @IsString()
  @IsOptional()
  inventoryStatus?: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsOptional()
  brands_id?: number;

  @ApiProperty({ example: '2024-02-28T12:00:00' })
  @IsDateString()
  @IsOptional()
  lastbuy_at?: Date;
}
