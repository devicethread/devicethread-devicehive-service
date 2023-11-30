import { Creds } from '../entities';
declare class AuthService {
    constructor();
    getDeviceHive(creds: Creds): Promise<any>;
    refreshToken(deviceHive: any, refreshToken: string): Promise<void>;
}
export default AuthService;
