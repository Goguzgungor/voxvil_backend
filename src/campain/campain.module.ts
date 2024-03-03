import { Module } from '@nestjs/common';
import { CampainService } from './campain.service';
import { CampainController } from './campain.controller';
import { PrismaService } from '../core/db/prisma_service/prisma.service';

@Module({
  controllers: [CampainController],
  providers: [CampainService, PrismaService],
})
export class CampainModule {}
