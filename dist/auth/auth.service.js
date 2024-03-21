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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const patient_schema_1 = require("./schema/patient.schema");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const hospital_schema_1 = require("./schema/hospital.schema");
const address_schema_1 = require("./schema/address.schema");
let AuthService = class AuthService {
    constructor(PatientModel, HospitalModel, AddressModel, jwtService) {
        this.PatientModel = PatientModel;
        this.HospitalModel = HospitalModel;
        this.AddressModel = AddressModel;
        this.jwtService = jwtService;
    }
    async patientSignUp(signUpDto) {
        const { password, ...details } = signUpDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const user = await this.PatientModel.create({
                ...details,
                password: hashedPassword,
            });
            const token = this.jwtService.sign({ id: user._id });
            return { token, user };
        }
        catch (error) {
            if (error?.code === 11000) {
                throw new common_1.ConflictException(`User alredy Exists`);
            }
        }
    }
    async patientLogin(loginDto) {
        const { email, password } = loginDto;
        const user = await this.PatientModel.findOne({ email });
        if (!user)
            throw new common_1.UnauthorizedException(`User not Exists`);
        const isPasswordMatched = bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            throw new common_1.UnauthorizedException(`Password doesn't match`);
        }
        const token = this.jwtService.sign({ id: user._id });
        return { token, user };
    }
    async hospitalSignUp(signUpDto) {
        console.log(signUpDto);
        const { password, ...details } = signUpDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const address = await this.AddressModel.create({
                country: details.country,
                state: details.state,
                city: details.city,
                street: details.street,
                pincode: details.pincode,
            });
            const hospital = await this.HospitalModel.create({
                ...details,
                password: hashedPassword,
                address: address._id,
            });
            const token = this.jwtService.sign({ id: hospital._id });
            return { token, hospital };
        }
        catch (error) {
            if (error?.code === 11000) {
                return (`User alredy Exists`);
            }
            else {
                console.log(error);
            }
        }
    }
    async hospitalLogin(loginDto) {
        const { hospitalId, password } = loginDto;
        const hospital = await this.HospitalModel.findOne({ hospitalId });
        if (!hospital)
            return {
                "message": "invalid hospital id"
            };
        const isPasswordMatched = bcrypt.compare(password, hospital.password);
        if (!isPasswordMatched) {
            return {
                "message": "password doesnot match"
            };
        }
        const token = this.jwtService.sign({ id: hospital._id });
        return { token, hospital };
    }
    async doctorLogin() { }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(patient_schema_1.Patient.name)),
    __param(1, (0, mongoose_1.InjectModel)(hospital_schema_1.Hospital.name)),
    __param(2, (0, mongoose_1.InjectModel)(address_schema_1.Address.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map