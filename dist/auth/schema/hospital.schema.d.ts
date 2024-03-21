/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose, { Document } from 'mongoose';
import { Address } from './address.schema';
import { Doctor } from 'src/hospital/schemas/doctor.schema';
export declare class Hospital extends Document {
    name: string;
    hospitalId: string;
    email: string;
    phone: string;
    password: string;
    address?: Address;
    doctors?: Doctor[];
}
export declare const HospitalSchema: mongoose.Schema<Hospital, mongoose.Model<Hospital, any, any, any, mongoose.Document<unknown, any, Hospital> & Hospital & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Hospital, mongoose.Document<unknown, {}, mongoose.FlatRecord<Hospital>> & mongoose.FlatRecord<Hospital> & {
    _id: mongoose.Types.ObjectId;
}>;
