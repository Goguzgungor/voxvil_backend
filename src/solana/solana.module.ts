import { Module } from '@nestjs/common';
import { SolanaService } from './solana.service';
import { SolanaController } from './solana.controller';
import { PrismaService } from '../core/db/prisma_service/prisma.service';

@Module({
  providers: [SolanaService, PrismaService],
  controllers: [SolanaController],
})
export class SolanaModule {}
