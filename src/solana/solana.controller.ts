import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { SolanaService } from './solana.service';
import { CreateNftDto } from './dto/create.nft.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('web3')
@ApiTags('web3')
export class SolanaController {
  constructor(
    @Inject(SolanaService)
    private readonly solanaService: SolanaService,
  ) {}

  @Post('solana/nft')
  async createNft(@Body() item: CreateNftDto) {
    return await this.solanaService.createSolNft(item);
  }

}
