declare class DeviceService {
    constructor();
    getAll(deviceHive: any): Promise<any>;
    get(deviceHive: any, deviceId: string): Promise<any>;
    update(deviceHive: any, deviceId: string, data: any): Promise<any>;
    delete(deviceHive: any, deviceId: string): Promise<any>;
}
export default DeviceService;
