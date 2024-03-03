import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../core/db/prisma_service/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dtos';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  // Import PrismaService with dependency injection
  constructor(
    @Inject(PrismaService)
    private readonly prismaService: PrismaService,
  ) {}

  async updateUser(user: UpdateUserDto, id:number) {
    const updatedUser = await this.prismaService.vox_user.update({
      where: { id: id },
      data: {
        wallet_address: user.wallet_address,
        nft_address: user.nft_address,
        street_address: user.street_address,
      },
    });
    return {
      completed: true,
      address: updatedUser.wallet_address,
      user_id: updatedUser.id,
    };
  }
  async createUser(createUserDto: CreateUserDto) {
    const user = await this.prismaService.vox_user.create({
      data: {
        wallet_address: createUserDto.wallet_address,
        nft_address: createUserDto.nft_address,
        street_address: createUserDto.street_address,
        created_at: new Date(),
      },
    });
    return {
      completed: true,
      address: user.wallet_address,
      user_id: user.id,
    };
  }
}
