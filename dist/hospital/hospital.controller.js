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
exports.HospitalController = void 0;
const common_1 = require("@nestjs/common");
const hospital_service_1 = require("./hospital.service");
const hospital_dto_1 = require("./dto/hospital.dto");
const swagger_1 = require("@nestjs/swagger");
let HospitalController = class HospitalController {
    constructor(hospitalService) {
        this.hospitalService = hospitalService;
    }
    getAllHospitals() {
        return this.hospitalService.getAllHospitals();
    }
    getHospital(id) {
        return this.hospitalService.getHospitalById(id);
    }
    getHospitalByName(name) {
        return this.hospitalService.getHospitalByName(name);
    }
    addDoctor(createDoctorDto, hospitalId) {
        return this.hospitalService.addDoctor(createDoctorDto, hospitalId);
    }
    removeDoctor(doctorId, hospitalId) {
        return this.hospitalService.removeDoctor(doctorId, hospitalId);
    }
    getAllDoctors(hospitalId) {
        return this.hospitalService.getAllDoctors(hospitalId);
    }
    getDoctor(doctorId) {
        return this.hospitalService.getDoctor(doctorId);
    }
};
exports.HospitalController = HospitalController;
__decorate([
    (0, common_1.Get)('allHospitals'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get all hospitals' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HospitalController.prototype, "getAllHospitals", null);
__decorate([
    (0, common_1.Get)('getHospital/:hospitalId'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get hospital by id' }),
    __param(0, (0, common_1.Param)('hospitalId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "getHospital", null);
__decorate([
    (0, common_1.Get)('getHospital/:hospitalName'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get hospital by name' }),
    __param(0, (0, common_1.Query)('hospitalName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "getHospitalByName", null);
__decorate([
    (0, common_1.Post)('addDoctor'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'doctor added successfully' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('hospitalId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hospital_dto_1.CreateDoctorDto, String]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "addDoctor", null);
__decorate([
    (0, common_1.Post)('removeDoctor'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'doctor removed successfully' }),
    __param(0, (0, common_1.Query)('doctorId')),
    __param(1, (0, common_1.Query)('hospitalId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "removeDoctor", null);
__decorate([
    (0, common_1.Get)(':hospitalId/getAllDoctors'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get all doctors' }),
    __param(0, (0, common_1.Param)('hospitalId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "getAllDoctors", null);
__decorate([
    (0, common_1.Get)('getDoctor/:doctorId'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get doctor by id' }),
    __param(0, (0, common_1.Param)('doctorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "getDoctor", null);
exports.HospitalController = HospitalController = __decorate([
    (0, common_1.Controller)('hospital'),
    (0, swagger_1.ApiTags)('Hospital'),
    __metadata("design:paramtypes", [hospital_service_1.HospitalService])
], HospitalController);
//# sourceMappingURL=hospital.controller.js.map