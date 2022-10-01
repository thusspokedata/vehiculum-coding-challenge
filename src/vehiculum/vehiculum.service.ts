import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateVehiculumDto } from './dto/create-vehiculum.dto';
import { UpdateVehiculumDto } from './dto/update-vehiculum.dto';
import { Vehiculum } from './entities/vehiculum.entity';

@Injectable()
export class VehiculumService {
  constructor(
    @InjectModel(Vehiculum.name)
    private readonly vehiculumModel: Model<Vehiculum>,
    private readonly configService: ConfigService,
  ) {}
  async create(createVehiculumDto: CreateVehiculumDto) {
    try {
      const vehiculum = await this.vehiculumModel.create(createVehiculumDto);
      return vehiculum;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.vehiculumModel.find();
  }

  async findOne(term: string) {
    let card: Vehiculum;
    if (!isNaN(+term)) {
      card = await this.vehiculumModel.findOne({ no: term });
    }
    // MongoID
    if (!card && isValidObjectId(term)) {
      card = await this.vehiculumModel.findById(term);
    }
    if (!card) {
      card = await this.vehiculumModel.findOne({
        name: term.toLowerCase().trim(),
      });
    }
    if (!card)
      throw new NotFoundException(
        `Card with _id, name or id "${term}" not found`,
      );
    return card;
  }

  async update(term: string, updateVehiculumDto: UpdateVehiculumDto) {
    const card = await this.findOne(term);
    if (updateVehiculumDto.name)
      updateVehiculumDto.name = updateVehiculumDto.name.toLowerCase();

    try {
      await card.updateOne(updateVehiculumDto, { new: true });
      return { ...card.toJSON(), ...updateVehiculumDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.vehiculumModel.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new BadRequestException(`Card with id "${id}" not found`);
    }
    return;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Card exist in DB ${JSON.stringify(error.keyValue)}`,
      );
    } else {
      console.log(error);
      throw new InternalServerErrorException(
        `Can't create card, check server logs`,
      );
    }
  }
}
