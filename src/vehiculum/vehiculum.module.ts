import { Module } from '@nestjs/common';
import { VehiculumService } from './vehiculum.service';
import { VehiculumController } from './vehiculum.controller';

@Module({
  controllers: [VehiculumController],
  providers: [VehiculumService]
})
export class VehiculumModule {}
