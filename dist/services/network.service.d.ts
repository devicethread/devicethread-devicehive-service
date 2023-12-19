declare class NetworkService {
    constructor();
    getAll(deviceHive: any): Promise<any>;
    get(deviceHive: any, networkId: string): Promise<any>;
    add(deviceHive: any, networkData: any): Promise<any>;
    update(deviceHive: any, networkId: string, networkData: any): Promise<any>;
    delete(deviceHive: any, networkId: string): Promise<any>;
}
export default NetworkService;
