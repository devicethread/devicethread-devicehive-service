declare class DeviceTypeService {
    constructor();
    getAll(deviceHive: any): Promise<any>;
    get(deviceHive: any, deviceTypeId: string): Promise<any>;
    add(deviceHive: any, deviceTypeData: any): Promise<any>;
    update(deviceHive: any, deviceTypeId: string, deviceTypeData: any): Promise<any>;
    delete(deviceHive: any, deviceTypeId: string): Promise<any>;
}
export default DeviceTypeService;
