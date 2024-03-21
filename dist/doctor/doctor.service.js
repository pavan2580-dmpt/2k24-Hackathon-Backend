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
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const patient_schema_1 = require("../auth/schema/patient.schema");
const doctor_schema_1 = require("../hospital/schemas/doctor.schema");
const report_schema_1 = require("./schemas/report.schema");
let DoctorService = class DoctorService {
    constructor(DoctorModel, PatientModel, ReportModel) {
        this.DoctorModel = DoctorModel;
        this.PatientModel = PatientModel;
        this.ReportModel = ReportModel;
    }
    async getDoctorWithAppiontments(doctorId) {
        return await this.DoctorModel.findById(doctorId).populate('appointments');
    }
    async getReports(patientId) {
        const patient = await this.PatientModel.findById(patientId).populate('reports');
        return patient.reports;
    }
    async updateReports(patientId, request) {
        const report = await this.ReportModel.create(request);
        if (report) {
            const patient = await this.PatientModel.findByIdAndUpdate(patientId, { $push: { reports: report._id } }, { new: true });
        }
        return report;
    }
};
exports.DoctorService = DoctorService;
exports.DoctorService = DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(doctor_schema_1.Doctor.name)),
    __param(1, (0, mongoose_1.InjectModel)(patient_schema_1.Patient.name)),
    __param(2, (0, mongoose_1.InjectModel)(report_schema_1.Report.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], DoctorService);
//# sourceMappingURL=doctor.service.js.map