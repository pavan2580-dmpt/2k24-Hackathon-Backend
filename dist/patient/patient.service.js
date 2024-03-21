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
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const appointment_schema_1 = require("./schemas/appointment.schema");
const mongoose_2 = require("mongoose");
const doctor_schema_1 = require("../hospital/schemas/doctor.schema");
let PatientService = class PatientService {
    constructor(AppointmentModel, DoctorModel) {
        this.AppointmentModel = AppointmentModel;
        this.DoctorModel = DoctorModel;
    }
    async addAppointment(patientId, doctorId, request) {
        const appointment = await this.AppointmentModel.create({
            patient: patientId,
            ...request,
        });
        if (appointment) {
            const doctor = await this.DoctorModel.findById(doctorId);
            doctor.appointment[request.timeSlot] = appointment._id;
        }
        return appointment;
    }
};
exports.PatientService = PatientService;
exports.PatientService = PatientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(appointment_schema_1.Appointment.name)),
    __param(1, (0, mongoose_1.InjectModel)(doctor_schema_1.Doctor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], PatientService);
//# sourceMappingURL=patient.service.js.map