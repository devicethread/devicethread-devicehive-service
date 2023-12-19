declare class UserService {
    constructor();
    getAll(deviceHive: any): Promise<any>;
    get(deviceHive: any, userId: string): Promise<any>;
    add(deviceHive: any, userData: any): Promise<any>;
    update(deviceHive: any, userId: string, userData: any): Promise<any>;
    delete(deviceHive: any, userId: string): Promise<any>;
    assignDeviceType(deviceHive: any, userId: string, deviceTypeId: string): Promise<any>;
    assignNetworkId(deviceHive: any, userId: string, networkId: string): Promise<any>;
}
export default UserService;
