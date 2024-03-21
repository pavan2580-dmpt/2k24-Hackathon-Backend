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
import { Doctor } from './schemas/doctor.schema';
import { Model } from 'mongoose';
import { Hospital } from 'src/auth/schema/hospital.schema';
import { CreateDoctorDto } from './dto/hospital.dto';
export declare class HospitalService {
    private HospitalModel;
    private DoctorModel;
    constructor(HospitalModel: Model<Hospital>, DoctorModel: Model<Doctor>);
    getAllHospitals(): Promise<Hospital[]>;
    getHospitalById(id: string): Promise<Hospital>;
    getHospitalByName(name: string): Promise<Hospital[]>;
    addDoctor(createDoctorDto: CreateDoctorDto, hospitalId: string): Promise<any>;
    removeDoctor(doctorId: string, hospitalId: string): Promise<any>;
    getAllDoctors(hospitalId: string): Promise<any>;
    getDoctor(doctorId: string): Promise<Doctor>;
}
