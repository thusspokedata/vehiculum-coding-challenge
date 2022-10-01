import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { VehiculumService } from './vehiculum.service';
import { CreateVehiculumDto } from './dto/create-vehiculum.dto';
import { UpdateVehiculumDto } from './dto/update-vehiculum.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';

@Controller('api/makes')
export class VehiculumController {
  constructor(private readonly vehiculumService: VehiculumService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() createVehiculumDto: CreateVehiculumDto) {
    return this.vehiculumService.create(createVehiculumDto);
  }

  @Get()
  findAll() {
    return this.vehiculumService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.vehiculumService.findOne(term);
  }

  @Patch(':term')
  update(
    @Param('term') term: string,
    @Body() updateVehiculumDto: UpdateVehiculumDto,
  ) {
    return this.vehiculumService.update(term, updateVehiculumDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.vehiculumService.remove(id);
  }
}
