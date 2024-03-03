import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { CampainService } from './campain.service';
import { CreateCampainDto } from './dto/create-campain.dto';
import { UpdateCampainDto } from './dto/update-campain.dto';
import { ApiTags } from "@nestjs/swagger";

@Controller('campain')
@ApiTags('campain')
export class CampainController {
  constructor(private readonly campainService: CampainService) {}

  @Post()
  async create(@Body() createCampainDto: CreateCampainDto) {
    return await this.campainService.create(createCampainDto);
  }

  @Get()
  async findAll() {
    return await this.campainService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.campainService.findOne(+id);
  }

  @Put('')
  async update(@Body() updateCampainDto: UpdateCampainDto) {
    return await this.campainService.update(updateCampainDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.campainService.remove(+id);
  }
}
