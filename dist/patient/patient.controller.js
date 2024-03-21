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
exports.PatientController = void 0;
const common_1 = require("@nestjs/common");
const patient_service_1 = require("./patient.service");
const appointment_dto_1 = require("./dto/appointment.dto");
const swagger_1 = require("@nestjs/swagger");
let PatientController = class PatientController {
    constructor(patientService) {
        this.patientService = patientService;
    }
    addAppointment(patientId, doctorId, request) {
        return this.patientService.addAppointment(patientId, doctorId, request);
    }
};
exports.PatientController = PatientController;
__decorate([
    (0, common_1.Post)(':patientId/addAppointment/:doctorId'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'appointment added successfully' }),
    __param(0, (0, common_1.Param)('patientId')),
    __param(1, (0, common_1.Param)('doctorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, appointment_dto_1.CreateAppointmentDto]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "addAppointment", null);
exports.PatientController = PatientController = __decorate([
    (0, common_1.Controller)('patient'),
    (0, swagger_1.ApiTags)('Patient'),
    __metadata("design:paramtypes", [patient_service_1.PatientService])
], PatientController);
//# sourceMappingURL=patient.controller.js.map