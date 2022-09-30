import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VehiculumService } from './vehiculum.service';
import { CreateVehiculumDto } from './dto/create-vehiculum.dto';
import { UpdateVehiculumDto } from './dto/update-vehiculum.dto';

@Controller('vehiculum/api')
export class VehiculumController {
  constructor(private readonly vehiculumService: VehiculumService) {}

  @Post()
  create(@Body() createVehiculumDto: CreateVehiculumDto) {
    return this.vehiculumService.create(createVehiculumDto);
  }

  @Get()
  findAll() {
    return this.vehiculumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiculumService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVehiculumDto: UpdateVehiculumDto,
  ) {
    return this.vehiculumService.update(+id, updateVehiculumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiculumService.remove(+id);
  }
}
