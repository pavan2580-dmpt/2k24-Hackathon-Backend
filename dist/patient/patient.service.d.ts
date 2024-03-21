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
import { Appointment } from './schemas/appointment.schema';
import { Model } from 'mongoose';
import { CreateAppointmentDto } from './dto/appointment.dto';
import { Doctor } from 'src/hospital/schemas/doctor.schema';
export declare class PatientService {
    private AppointmentModel;
    private DoctorModel;
    constructor(AppointmentModel: Model<Appointment>, DoctorModel: Model<Doctor>);
    addAppointment(patientId: string, doctorId: string, request: CreateAppointmentDto): Promise<import("mongoose").Document<unknown, {}, Appointment> & Appointment & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
