"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeviceHive = require('devicehive');
class DeviceTypeService {
    constructor() { }
    async getAll(deviceHive) {
        const DeviceTypeListQuery = DeviceHive.models.query.DeviceTypeListQuery;
        const deviceTypeListQuery = new DeviceTypeListQuery();
        const deviceTypeList = await deviceHive.network.list(deviceTypeListQuery);
        return deviceTypeList;
    }
    async get(deviceHive, deviceTypeId) {
        return await deviceHive.deviceType.get(deviceTypeId);
    }
    async add(deviceHive, deviceTypeData) {
        const DeviceType = DeviceHive.deviceType.DeviceType;
        const deviceType = new DeviceType(deviceTypeData);
        await deviceHive.deviceType.insert(deviceType);
    }
    async update(deviceHive, deviceTypeId, deviceTypeData) {
        const DeviceType = DeviceHive.deviceType.DeviceType;
        const deviceType = new DeviceType(deviceTypeData);
        await deviceHive.deviceType.update(deviceTypeId, deviceType);
    }
    async delete(deviceHive, deviceTypeId) {
        await deviceHive.deviceType.delete(deviceTypeId);
    }
}
exports.default = DeviceTypeService;
