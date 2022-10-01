import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { VehiculumService } from './vehiculum.service';
import { VehiculumController } from './vehiculum.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehiculum, VehiculumSchema } from './entities/vehiculum.entity';

@Module({
  controllers: [VehiculumController],
  providers: [VehiculumService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Vehiculum.name,
        schema: VehiculumSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class VehiculumModule {}
