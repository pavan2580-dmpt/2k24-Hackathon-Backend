import { AuthService } from './auth.service';
import { PatientSignUpDto } from './dto/signup.dto';
import { HospitalLoginDto, PatientLoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    patientSignUp(signUpDto: PatientSignUpDto): Promise<{
        token: string;
    }>;
    patientLogin(loginDto: PatientLoginDto): Promise<{
        token: string;
    }>;
    hospitalSignUp(signUpDto: any): Promise<any>;
    hospitalLogin(loginDto: HospitalLoginDto): Promise<{
        token: string;
    }>;
}
