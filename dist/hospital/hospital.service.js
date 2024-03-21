"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalService = void 0;
const common_1 = require("@nestjs/common");
const doctor_schema_1 = require("./schemas/doctor.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hospital_schema_1 = require("../auth/schema/hospital.schema");
let HospitalService = class HospitalService {
    constructor(HospitalModel, DoctorModel) {
        this.HospitalModel = HospitalModel;
        this.DoctorModel = DoctorModel;
    }
    async getAllHospitals() {
        const hospitals = await this.HospitalModel.find();
        return hospitals;
    }
    async getHospitalById(id) {
        const hospital = await this.HospitalModel.findById(id);
        return hospital;
    }
    async getHospitalByName(name) {
        const keyword = name
            ? {
                name: {
                    $regex: name,
                    $options: 'i',
                },
            }
            : {};
        const hospital = await this.HospitalModel.find(keyword);
        return hospital;
    }
    async addDoctor(createDoctorDto, hospitalId) {
        let hospital = await this.HospitalModel.findById(hospitalId);
        let doctor = await this.DoctorModel.findOne({
            phone: createDoctorDto.phone,
        });
        if (!doctor) {
            doctor = await this.DoctorModel.create(createDoctorDto);
        }
        if (!hospital.doctors) {
            hospital = await this.HospitalModel.findByIdAndUpdate(hospitalId, { $set: { doctors: [doctor._id.toString()] } }, { new: true });
            console.log(hospital);
        }
        else {
            hospital = await this.HospitalModel.findByIdAndUpdate(hospitalId, { $push: { doctors: doctor._id.toString() } }, { new: true });
        }
        return { data: hospital, message: 'Doctor added successfully' };
    }
    async removeDoctor(doctorId, hospitalId) {
        const hospital = await this.HospitalModel.findById(hospitalId);
        hospital.doctors = hospital.doctors.filter((doctor) => doctor._id.toString() !== doctorId);
        await hospital.save();
        return { data: hospital, message: 'Doctor removed successfully' };
    }
    async getAllDoctors(hospitalId) {
        const doctors = await this.HospitalModel.findById(hospitalId).populate('doctors');
        const simplifiedDoctors = doctors.doctors.map((doctor) => ({
            name: doctor.name,
            experience: doctor.experience,
            specialization: doctor.specialization,
            photo: doctor.photo,
        }));
        return simplifiedDoctors;
    }
    async getDoctor(doctorId) {
        const doctor = await this.DoctorModel.findById(doctorId);
        return doctor;
    }
};
exports.HospitalService = HospitalService;
exports.HospitalService = HospitalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(hospital_schema_1.Hospital.name)),
    __param(1, (0, mongoose_1.InjectModel)(doctor_schema_1.Doctor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], HospitalService);
//# sourceMappingURL=hospital.service.js.map