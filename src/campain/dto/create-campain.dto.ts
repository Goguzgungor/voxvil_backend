import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateCampainDto {
  @ApiProperty({ required: true })
  @IsDateString()
  start_date: Date;

  @ApiProperty({ required: true })
  @IsDateString()
  end_date: Date;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  campain_name?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  amount_xp?: number;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  brands_id?: number;
}
