"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeviceHive = require('devicehive');
class DeviceService {
    constructor() { }
    async getAll(deviceHive) {
        const DeviceListQuery = DeviceHive.models.query.DeviceListQuery;
        const deviceListQuery = new DeviceListQuery();
        const deviceList = await deviceHive.device.list(deviceListQuery);
        return deviceList;
    }
    async get(deviceHive, deviceId) {
        return await deviceHive.device.get(deviceId);
    }
    async update(deviceHive, deviceId, data) {
        const Device = DeviceHive.models.Device;
        const device = new Device({ id: deviceId, ...data });
        await deviceHive.device.add(device);
    }
    async delete(deviceHive, deviceId) {
        await deviceHive.device.delete(deviceId);
    }
}
exports.default = DeviceService;
