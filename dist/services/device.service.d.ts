declare class DeviceService {
    constructor();
    getAll(deviceHive: any): Promise<any>;
    1: any;
    get(deviceHive: any, deviceId: string): Promise<any>;
    update(deviceHive: any, deviceId: string, data: any): Promise<void>;
    delete(deviceHive: any, deviceId: string): Promise<void>;
}
export default DeviceService;
