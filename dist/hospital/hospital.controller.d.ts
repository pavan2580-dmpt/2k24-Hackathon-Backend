import { HospitalService } from './hospital.service';
import { CreateDoctorDto } from './dto/hospital.dto';
import { Hospital } from 'src/auth/schema/hospital.schema';
export declare class HospitalController {
    private readonly hospitalService;
    constructor(hospitalService: HospitalService);
    getAllHospitals(): Promise<Hospital[]>;
    getHospital(id: string): Promise<Hospital>;
    getHospitalByName(name: string): Promise<Hospital[]>;
    addDoctor(createDoctorDto: CreateDoctorDto, hospitalId: string): Promise<any>;
    removeDoctor(doctorId: string, hospitalId: string): Promise<any>;
    getAllDoctors(hospitalId: string): Promise<any>;
    getDoctor(doctorId: string): Promise<import("src/hospital/schemas/doctor.schema").Doctor>;
}
