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
exports.PatientSchema = exports.Patient = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose_3 = require("mongoose");
let Patient = class Patient extends mongoose_2.Document {
};
exports.Patient = Patient;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Patient.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Patient.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, type: Number }),
    __metadata("design:type", Number)
], Patient.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Patient.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: mongoose_3.default.Schema.Types.ObjectId,
        ref: 'Report',
    }),
    __metadata("design:type", Array)
], Patient.prototype, "reports", void 0);
exports.Patient = Patient = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Patient);
exports.PatientSchema = mongoose_1.SchemaFactory.createForClass(Patient);
//# sourceMappingURL=patient.schema.js.map