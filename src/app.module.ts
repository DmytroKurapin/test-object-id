import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestService } from './test/test.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TestSchema } from './test/test.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }])],
  controllers: [AppController],
  providers: [AppService, TestService],
})
export class AppModule {}
