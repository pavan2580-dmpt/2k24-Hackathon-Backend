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
import { Patient } from './schema/patient.schema';
import { Model } from 'mongoose';
import { PatientSignUpDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
import { HospitalLoginDto, PatientLoginDto } from './dto/login.dto';
import { Hospital } from './schema/hospital.schema';
import { Address } from './schema/address.schema';
export declare class AuthService {
    private PatientModel;
    private HospitalModel;
    private AddressModel;
    private jwtService;
    constructor(PatientModel: Model<Patient>, HospitalModel: Model<Hospital>, AddressModel: Model<Address>, jwtService: JwtService);
    patientSignUp(signUpDto: PatientSignUpDto): Promise<{
        token: string;
        user: any;
    }>;
    patientLogin(loginDto: PatientLoginDto): Promise<{
        token: string;
        user: any;
    }>;
    hospitalSignUp(signUpDto: any): Promise<any>;
    hospitalLogin(loginDto: HospitalLoginDto): Promise<any>;
    doctorLogin(): Promise<void>;
}
