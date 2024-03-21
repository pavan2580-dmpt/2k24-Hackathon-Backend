"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const patient_schema_1 = require("./schema/patient.schema");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./jwt.strategy");
const passport_1 = require("@nestjs/passport");
const hospital_schema_1 = require("./schema/hospital.schema");
const address_schema_1 = require("./schema/address.schema");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const doctor_schema_1 = require("../hospital/schemas/doctor.schema");
const appointment_schema_1 = require("../patient/schemas/appointment.schema");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                useFactory: () => ({
                    secret: process.env.JWT_SECRET,
                    signOptions: {
                        expiresIn: process.env.JWT_EXPIRES,
                    },
                }),
            }),
            mongoose_1.MongooseModule.forFeature([
                { name: patient_schema_1.Patient.name, schema: patient_schema_1.PatientSchema },
                { name: hospital_schema_1.Hospital.name, schema: hospital_schema_1.HospitalSchema },
                { name: address_schema_1.Address.name, schema: address_schema_1.AddressSchema },
                { name: doctor_schema_1.Doctor.name, schema: doctor_schema_1.DoctorSchema },
                { name: appointment_schema_1.Appointment.name, schema: appointment_schema_1.AppointmentSchema },
            ]),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [jwt_strategy_1.JwtStrategy, auth_service_1.AuthService],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map