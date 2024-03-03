import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from '../core/db/prisma_service/prisma.service';

@Injectable()
export class BrandsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBrandDto: CreateBrandDto) {
    return this.prismaService.brands.create({
      data: createBrandDto,
    });
  }

  async findAll() {
    return this.prismaService.brands.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.brands.findUnique({ where: { id } });
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
