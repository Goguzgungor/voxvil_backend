import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '../core/db/prisma_service/prisma.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, PrismaService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
