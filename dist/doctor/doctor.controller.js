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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_1 = require("./doctor.service");
const common_2 = require("@nestjs/common");
const report_dto_1 = require("./dto/report.dto");
const swagger_1 = require("@nestjs/swagger");
let DoctorController = class DoctorController {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    getDoctorWithAppiontments(doctorId) {
        return this.doctorService.getDoctorWithAppiontments(doctorId);
    }
    getReports(patientId) {
        return this.doctorService.getReports(patientId);
    }
    updateReports(patientId, request) {
        return this.doctorService.updateReports(patientId, request);
    }
};
exports.DoctorController = DoctorController;
__decorate([
    (0, common_1.Get)('getDoctorAppiontments/:doctorId'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get doctor with appiontments' }),
    __param(0, (0, common_2.Param)('doctorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "getDoctorWithAppiontments", null);
__decorate([
    (0, common_1.Get)('getReports/:patientId'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get reports' }),
    __param(0, (0, common_2.Param)('patientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "getReports", null);
__decorate([
    (0, common_1.Get)('updateReports/:patientId'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Update reports' }),
    __param(0, (0, common_2.Param)('patientId')),
    __param(1, (0, common_1.Body)('request')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, report_dto_1.ReportDto]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "updateReports", null);
exports.DoctorController = DoctorController = __decorate([
    (0, common_1.Controller)('doctor'),
    (0, swagger_1.ApiTags)('Doctor'),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService])
], DoctorController);
//# sourceMappingURL=doctor.controller.js.map