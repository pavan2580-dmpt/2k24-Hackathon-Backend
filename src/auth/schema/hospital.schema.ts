import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Address } from './address.schema';
import { Doctor } from 'src/hospital/schemas/doctor.schema';

@Schema({ timestamps: true })
export class Hospital extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  hospitalId: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Address' })
  address?: Address;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Doctor',
  })
  doctors?: Doctor[];
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
