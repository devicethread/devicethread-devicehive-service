declare class DeviceTypeService {
    constructor();
    getAll(deviceHive: any): Promise<any>;
    get(deviceHive: any, deviceTypeId: string): Promise<any>;
    add(deviceHive: any, deviceTypeData: any): Promise<void>;
    update(deviceHive: any, deviceTypeId: string, deviceTypeData: any): Promise<void>;
    delete(deviceHive: any, deviceTypeId: string): Promise<void>;
}
export default DeviceTypeService;
