import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Response } from 'express';

@Controller('/api/inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(
    @Body() createInventoryDto: CreateInventoryDto,
    @Res() response: Response,
  ) {
    this.inventoryService.create(createInventoryDto);

    return response
      .status(HttpStatus.CREATED)
      .send({ message: 'Short course booking completed!' });
  }

  @Get()
  findAll(
    @Query('perPage') perPage: number,
    @Query('page') page: number,
    @Query('order') order: string,
    @Query('orderBy') orderBy: string,
    @Query('search') search: string,
  ) {
    return this.inventoryService.findAll({
      where: {
        OR: [
          { entryId: { contains: search } },
          { title: { contains: search } },
          { author: { contains: search } },
          { genre: { contains: search } },
          { publicationDate: { contains: search } },
          { isbn: { contains: search } },
        ],
      },
      orderBy: { [orderBy]: order },
      perPage,
      page,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() response: Response) {
    const inventory = this.inventoryService.findOne(+id);
    if (inventory) {
      return inventory;
    }
    return response.status(HttpStatus.NOT_FOUND).json({
      message: 'Inventory not found!',
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
    @Res() response: Response,
  ) {
    const inventory = this.inventoryService.findOne(+id);
    if (!inventory) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'Inventory not found!',
      });
    }
    const inventoryUpdated = this.inventoryService.update(
      +id,
      updateInventoryDto,
    );

    if (inventoryUpdated) {
      return response.status(HttpStatus.OK).json({
        message: 'Book inventory updated!',
      });
    } else {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Book inventory update failed!',
      });
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() response: Response) {
    const inventory = this.inventoryService.findOne(+id);
    if (!inventory) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'Inventory not found!',
      });
    }

    const inventoryDeleted = this.inventoryService.remove(+id);
    if (inventoryDeleted) {
      return response.status(HttpStatus.OK).json({
        message: 'Book inventory deleted!',
      });
    } else {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Book inventory delete failed!',
      });
    }
  }
}
