"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeviceHive = require('devicehive');
class DeviceTypeService {
    constructor() { }
    async getAll(deviceHive) {
        const DeviceTypeListQuery = DeviceHive.models.query.DeviceTypeListQuery;
        const deviceTypeListQuery = new DeviceTypeListQuery();
        const deviceTypeList = await deviceHive.deviceType.list(deviceTypeListQuery);
        return deviceTypeList;
    }
    async get(deviceHive, deviceTypeId) {
        return await deviceHive.deviceType.get(deviceTypeId);
    }
    async add(deviceHive, deviceTypeData) {
        const DeviceType = DeviceHive.models.DeviceType;
        const deviceType = new DeviceType(deviceTypeData);
        return await deviceHive.deviceType.insert(deviceType);
    }
    async update(deviceHive, deviceTypeId, deviceTypeData) {
        const DeviceType = DeviceHive.models.DeviceType;
        const deviceType = new DeviceType(deviceTypeData);
        return await deviceHive.deviceType.update(deviceTypeId, deviceType);
    }
    async delete(deviceHive, deviceTypeId) {
        const DeviceTypeDeleteQuery = DeviceHive.models.query.DeviceTypeDeleteQuery;
        const deviceTypeDeleteQuery = new DeviceTypeDeleteQuery({ deviceTypeId });
        return await deviceHive.deviceType.delete(deviceTypeDeleteQuery);
    }
}
exports.default = DeviceTypeService;
