import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TestService } from './test/test.service';
import { Types } from 'mongoose';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly testService: TestService) {}

  @Get()
  async getHello(): Promise<Types.ObjectId[]> {
    return this.testService.testObjectId();
  }
}
