"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CacheService {
    constructor() { }
    async connectRedis(clientFromService) {
        this.client = clientFromService;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new CacheService();
            return this.instance;
        }
    }
    async getDataOnRedis(data) {
        try {
            let dataOnRedis = await this.client.get(data.key);
            return dataOnRedis;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async setDataOnRedis(data) {
        try {
            let addData = await this.client.set(data.key, data.value);
            return addData;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async pushOnRedis(data) {
        try {
            let pushDataOnRedis = await this.client.rpush(data.key, data.value);
            return pushDataOnRedis;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async deleteDataOnRedis(data) {
        try {
            let deletedData = await this.client.del(data.key);
            return deletedData;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async existsOnRedis(data) {
        try {
            let redisKeyExists = await this.client.exists(data.key);
            return redisKeyExists;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async getDataLengthOnRedis(data) {
        try {
            let redisDataLength = await this.client.llen(data.key);
            return redisDataLength;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async getDataLengthRangeOnRedis(data) {
        try {
            let redisDataLengthRange = await this.client.lrange(data.key, data.start, data.listLength);
            return redisDataLengthRange;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async setListDataOnRedis(data) {
        try {
            let setData = await this.client.lset(data.key, data.index, data.value);
            return setData;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async removeDataOnRedis(data) {
        try {
            let removedData = await this.client.lrem(data.key, data.start, data.listLength);
            return removedData;
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async setDataOnRedisWithExpire(data, expireTime) {
        try {
            //expireTime in sec
            let addData = await this.client.set(data.key, data.value, 'EX', expireTime);
            return addData;
        }
        catch (err) {
            throw new Error(err);
        }
    }
}
exports.default = CacheService;
