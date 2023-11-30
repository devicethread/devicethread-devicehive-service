declare class NetworkService {
    constructor();
    getAll(deviceHive: any): Promise<any>;
    get(deviceHive: any, networkId: string): Promise<any>;
    update(deviceHive: any, networkId: string, networkData: any): Promise<void>;
    delete(deviceHive: any, networkId: string): Promise<void>;
}
export default NetworkService;
