import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

import { Vehiculum } from '../vehiculum/entities/vehiculum.entity';
import { CardResponse } from './interfaces/card-response.interface';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Vehiculum.name)
    private readonly vehiculumModel: Model<Vehiculum>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.vehiculumModel.deleteMany({});
    const data = await this.http.get<CardResponse>(
      'https://vehiculum-coding-challenge.herokuapp.com/api/makes',
    );

    const cardToInsert: { name: string; id: number }[] = [];

    data.forEach(({ name, id }) => {
      cardToInsert.push({ name, id });
    });
    await this.vehiculumModel.insertMany(cardToInsert);

    return 'seed executed';
  }
}
