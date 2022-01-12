import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema, Types } from 'mongoose';
import { TestDocument } from './test.model';

@Injectable()
export class TestService {
  constructor(@InjectModel('Test') private readonly ideaModel: Model<TestDocument>,) {
  }

  public async testObjectId (): Promise<Types.ObjectId[]> {

    const rawData = await this.ideaModel.insertMany([{ name: 'Alex' }, { name: 'John' }], { rawResult: true });
    return [...Object.values(rawData.insertedIds)];
  }
}
