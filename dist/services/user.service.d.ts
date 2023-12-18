declare class UserService {
    constructor();
    getAll(deviceHive: any): Promise<any>;
    get(deviceHive: any, userId: string): Promise<any>;
    add(deviceHive: any, userData: any): Promise<void>;
    update(deviceHive: any, userId: string, userData: any): Promise<void>;
    delete(deviceHive: any, userId: string): Promise<void>;
    assignDeviceType(deviceHive: any, userId: string, deviceTypeId: string): Promise<void>;
    assignNetworkId(deviceHive: any, userId: string, networkId: string): Promise<void>;
}
export default UserService;
