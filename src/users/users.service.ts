import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../core/db/prisma_service/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dtos';
import { BrandDto } from '../brands/dto/create-brand.dto';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  // Import PrismaService with dependency injection
  constructor(
    @Inject(PrismaService)
    private readonly prismaService: PrismaService,
  ) {}

  async updateUser(user: UpdateUserDto, id: number) {
    const updatedUser = await this.prismaService.vox_user.update({
      where: { id: id },
      data: {
        wallet_address: user.wallet_address,
        street_address: user.street_address,
        created_at: new Date(),
        twitter: user.twitter,
        discord: user.discord,
        phone_number: user.phone_number,
        notes: user.notes,
        name: user.name,
        email: user.email,
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
        street_address: createUserDto.street_address,
        created_at: new Date(),
        twitter: createUserDto.twitter,
        discord: createUserDto.discord,
        phone_number: createUserDto.phone_number,
        notes: createUserDto.notes,
        name: createUserDto.name,
        email: createUserDto.email,
      },
    });
    return {
      completed: true,
      address: user.wallet_address,
      user_id: user.id,
    };
  }

  async getUserByWalletAddress(wallet_address: string) {
    return this.prismaService.vox_user.findFirst({
      where: {
        wallet_address: wallet_address,
      },
    });
  }

  async getAllMembers() {
    return await this.prismaService.$queryRawUnsafe(`
    select mn.address nft_adrress, b.chain_name,
b.name as brand_name,b.id as brand_id, vu.*  from member_nft mn
join brands b on b.id = mn.brand_id
join vox_user vu on mn.user_id = vu.id;`);
  }
}
