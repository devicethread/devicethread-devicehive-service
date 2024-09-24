declare class CacheService {
    private client;
    static instance: any;
    constructor();
    connectRedis(clientFromService: any): Promise<void>;
    static getInstance(): any;
    getDataOnRedis(data: any): Promise<any>;
    setDataOnRedis(data: any): Promise<any>;
    pushOnRedis(data: any): Promise<any>;
    deleteDataOnRedis(data: any): Promise<any>;
    existsOnRedis(data: any): Promise<any>;
    getDataLengthOnRedis(data: any): Promise<any>;
    getDataLengthRangeOnRedis(data: any): Promise<any>;
    setListDataOnRedis(data: any): Promise<any>;
    removeDataOnRedis(data: any): Promise<any>;
    setDataOnRedisWithExpire(data: any, expireTime: any): Promise<any>;
}
export default CacheService;
