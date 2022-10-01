import { Module } from '@nestjs/common';
import { VehiculumService } from './vehiculum.service';
import { VehiculumController } from './vehiculum.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehiculum, VehiculumSchema } from './entities/vehiculum.entity';

@Module({
  controllers: [VehiculumController],
  providers: [VehiculumService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Vehiculum.name,
        schema: VehiculumSchema,
      },
    ]),
  ],
})
export class VehiculumModule {}
