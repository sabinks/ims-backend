import { Controller, Get } from '@nestjs/common';
import { InventoriesService } from './inventories.service';

@Controller('api/inventories')
export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) {}

  @Get()
  findAll() {
    return this.inventoriesService.findAll();
  }
}
