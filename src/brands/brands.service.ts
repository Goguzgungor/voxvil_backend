import { Injectable } from '@nestjs/common';
import { BrandDto, CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from '../core/db/prisma_service/prisma.service';
import { Keypair } from '@solana/web3.js';
import * as bip39 from 'bip39';
import * as bs58 from 'bs58';

@Injectable()
export class BrandsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBrandDto: CreateBrandDto) {
    const keypair = Keypair.generate();
    const publicKey: string = keypair.publicKey.toString();
    const secretKey = keypair.secretKey;
    const secretKeyString = bs58.encode(secretKey);
    //TODO: you can get the secret key from the secretKeyString
    //const keypair1 = Keypair.fromSecretKey(bs58.decode(secretKeyString));
    return this.prismaService.brands.create({
      data: {
        name: createBrandDto.name,
        chain_name: createBrandDto.chain_name,
        created_at: new Date(),
        wallet_address: publicKey,
        secret_key: secretKeyString,
      },
    });
  }

  async findAll() {
    return this.prismaService.brands.findMany({
      select: {
        id: true,
        name: true,
        chain_name: true,
        wallet_address: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prismaService.brands.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        chain_name: true,
        wallet_address: true,
      },
    });
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    return this.prismaService.brands.update({
      where: { id },
      data: updateBrandDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.brands.delete({ where: { id } });
  }
}
