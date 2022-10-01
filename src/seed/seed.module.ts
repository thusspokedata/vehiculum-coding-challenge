import { Module } from '@nestjs/common';
import { VehiculumModule } from 'src/vehiculum/vehiculum.module';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CommonModule } from '../common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [VehiculumModule, CommonModule],
})
export class SeedModule {}
