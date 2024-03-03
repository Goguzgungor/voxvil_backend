import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from '../core/db/prisma_service/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    createOrderDto.order_at = new Date();
    return this.prismaService.orders.create({
      data: createOrderDto,
    });
  }

  async findAll() {
    return this.prismaService.orders.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.orders.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prismaService.orders.update({
      where: { id },
      data: updateOrderDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.orders.delete({
      where: { id },
    });
  }
}
