import { Injectable } from '@nestjs/common';
import { CreateCampainDto } from './dto/create-campain.dto';
import { UpdateCampainDto } from './dto/update-campain.dto';
import { PrismaService } from '../core/db/prisma_service/prisma.service';

@Injectable()
export class CampainService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCampainDto: CreateCampainDto) {
    return this.prismaService.campains.create({
      data: createCampainDto,
    });
  }

  async findAll() {
    return await this.prismaService.campains.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.campains.findUnique({
      where: { id: id },
    });
  }

  async update(updateCampainDto: UpdateCampainDto) {
    return this.prismaService.campains.update({
      where: { id: updateCampainDto.id },
      data: updateCampainDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.campains.delete({
      where: { id: id },
    });
  }
}
