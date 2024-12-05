import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/pagination/paginator';
const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}
  async create(createInventoryDto: CreateInventoryDto) {
    await this.prisma.inventory.create({
      data: createInventoryDto,
    });
  }

  async findAll({
    where,
    orderBy,
    page = 1,
    perPage = 10,
  }: {
    where?: Prisma.InventoryWhereInput;
    orderBy?: Prisma.InventoryOrderByWithRelationInput;
    page?: number;
    perPage?: number;
  }) {
    return paginate(
      this.prisma.inventory,
      {
        where,
        include: {},
        orderBy,
      },
      {
        page,
        perPage: perPage,
      },
    );
  }
  async findOne(id: number) {
    const inventory = await this.prisma.inventory.findFirst({
      where: { id: id },
    });
    return inventory;
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return await this.prisma.inventory.update({
      where: { id },
      data: updateInventoryDto,
    });
  }

  async remove(id: number) {
    const result = await this.prisma.inventory.delete({
      where: {
        id,
      },
    });
    return result;
  }
}
