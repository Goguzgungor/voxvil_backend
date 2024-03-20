import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateNftDto {
  @ApiProperty({
    description: 'Key-value pairs representing item attributes',
    example: [{ key1: 'value1' }, { key2: 'value2' }],
  })
  @IsString({ each: true })
  item: [Record<string, string>];

  @ApiProperty({
    description: 'ID of the brand associated with the item',
    example: 1,
  })
  @IsInt()
  brand_id: number;

  @ApiProperty({
    description: 'ID of the user who owns the item',
    example: 1,
  })
  @IsInt()
  user_id: number;

  @ApiProperty({
    description: 'Img url of NFT',
    example: 'https://i.ibb.co/8d8Y6zb/Screenshot-2024-03-15-at-22-16-09.png',
  })
  @IsString()
  imgUrl: string;
}
