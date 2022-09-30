import { PartialType } from '@nestjs/mapped-types';
import { CreateVehiculumDto } from './create-vehiculum.dto';

export class UpdateVehiculumDto extends PartialType(CreateVehiculumDto) {}
