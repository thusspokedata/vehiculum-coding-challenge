import { Injectable } from '@nestjs/common';
import { CreateVehiculumDto } from './dto/create-vehiculum.dto';
import { UpdateVehiculumDto } from './dto/update-vehiculum.dto';

@Injectable()
export class VehiculumService {
  create(createVehiculumDto: CreateVehiculumDto) {
    return 'This action adds a new vehiculum';
  }

  findAll() {
    return `This action returns all vehiculum`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehiculum`;
  }

  update(id: number, updateVehiculumDto: UpdateVehiculumDto) {
    return `This action updates a #${id} vehiculum`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehiculum`;
  }
}
