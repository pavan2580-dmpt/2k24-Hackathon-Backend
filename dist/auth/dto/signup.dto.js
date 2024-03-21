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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalSignUpDto = exports.PatientSignUpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PatientSignUpDto {
}
exports.PatientSignUpDto = PatientSignUpDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, description: 'name must be a string' }),
    __metadata("design:type", String)
], PatientSignUpDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ type: String, description: 'email must be a email' }),
    __metadata("design:type", String)
], PatientSignUpDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPhoneNumber)('IN'),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.MaxLength)(10),
    (0, swagger_1.ApiProperty)({ type: Number, description: 'phone must be a phone number' }),
    __metadata("design:type", Number)
], PatientSignUpDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'password must be greater than 5 letters',
    }),
    __metadata("design:type", String)
], PatientSignUpDto.prototype, "password", void 0);
class HospitalSignUpDto {
}
exports.HospitalSignUpDto = HospitalSignUpDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, description: 'name must be a string' }),
    __metadata("design:type", String)
], HospitalSignUpDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, description: 'hospitalId must be a string' }),
    __metadata("design:type", String)
], HospitalSignUpDto.prototype, "hospitalId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ type: String, description: 'email must be a email' }),
    __metadata("design:type", String)
], HospitalSignUpDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPhoneNumber)('IN'),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.MaxLength)(10),
    (0, swagger_1.ApiProperty)({ type: Number, description: 'phone must be a phone number' }),
    __metadata("design:type", String)
], HospitalSignUpDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'password must be greater than 5 letters',
    }),
    __metadata("design:type", String)
], HospitalSignUpDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], HospitalSignUpDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], HospitalSignUpDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], HospitalSignUpDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.MaxLength)(6),
    (0, swagger_1.ApiProperty)({ type: Number, default: 534101 }),
    __metadata("design:type", String)
], HospitalSignUpDto.prototype, "pincode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], HospitalSignUpDto.prototype, "street", void 0);
//# sourceMappingURL=signup.dto.js.map