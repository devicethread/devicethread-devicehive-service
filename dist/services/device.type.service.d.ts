declare class DeviceTypeService {
    constructor();
    getAll(deviceHive: any): Promise<any>;
    get(deviceHive: any, deviceTypeId: string): Promise<any>;
    update(deviceHive: any, deviceTypeId: string, deviceTypeData: any): Promise<void>;
    delete(deviceHive: any, deviceTypeId: string): Promise<void>;
}
export default DeviceTypeService;
