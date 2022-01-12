import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TestDocument = TestModel & Document;

@Schema({ timestamps: true })
export class TestModel {
  @Prop({ type: String, required: true })
  name: string;
}

export const TestSchema = SchemaFactory.createForClass(TestModel);
