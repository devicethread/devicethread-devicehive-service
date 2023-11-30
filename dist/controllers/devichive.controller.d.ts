import { Creds } from '../entities';
export declare class DeviceHive {
    private authService;
    private deviceTypeService;
    private deviceService;
    private networkService;
    private userService;
    constructor();
    getDevices(creds: Creds): Promise<any>;
    getDeviceTypes(creds: Creds): Promise<any>;
    getNetworks(creds: Creds): Promise<any>;
    getUsers(creds: Creds): Promise<any>;
    getDevice(creds: Creds, deviceId: string): Promise<any>;
    getDeviceType(creds: Creds, deviceTypeId: string): Promise<any>;
    getNetwork(creds: Creds, networkId: string): Promise<any>;
    getUser(creds: Creds, userId: string): Promise<any>;
    updateDevice(creds: Creds, deviceId: string, data: any): Promise<any>;
    updateDeviceType(creds: Creds, deviceTypeId: string, data: any): Promise<any>;
    updateNetwork(creds: Creds, networkId: string, data: any): Promise<any>;
    updateUser(creds: Creds, userId: string, data: any): Promise<any>;
    deleteDevice(creds: Creds, deviceId: string): Promise<any>;
    deleteDeviceType(creds: Creds, deviceTypeId: string): Promise<any>;
    deleteNetwork(creds: Creds, networkId: string): Promise<any>;
    deleteUser(creds: Creds, userId: string): Promise<any>;
    assignNetworkId(creds: Creds, userId: string, networkId: string): Promise<any>;
    assignDeviceType(creds: Creds, userId: string, deviceTypeId: string): Promise<any>;
    refresh(creds: Creds, refreshToken: string): Promise<any>;
}
