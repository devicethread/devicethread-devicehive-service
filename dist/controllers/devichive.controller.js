"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceHive = void 0;
const auth_service_1 = require("../services/auth.service");
const device_service_1 = require("../services/device.service");
const device_type_service_1 = require("../services/device.type.service");
const network_service_1 = require("../services/network.service");
const user_service_1 = require("../services/user.service");
const Route_1 = require("../utils/Route");
class DeviceHive {
    constructor() {
        this.authService = new auth_service_1.default();
        this.deviceTypeService = new device_type_service_1.default();
        this.deviceService = new device_service_1.default();
        this.networkService = new network_service_1.default();
        this.userService = new user_service_1.default();
    }
    //  GET ALL ENITITES
    async getDevices(creds) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.deviceService.getAll(deviceHive);
    }
    async getDeviceTypes(creds) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.deviceTypeService.getAll(deviceHive);
    }
    async getNetworks(creds) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.networkService.getAll(deviceHive);
    }
    async getUsers(creds) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.userService.getAll(deviceHive);
    }
    //   GET SINGLE ENTITY
    async getDevice(creds, deviceId) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.deviceService.get(deviceHive, deviceId);
    }
    async getDeviceType(creds, deviceTypeId) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.deviceTypeService.get(deviceHive, deviceTypeId);
    }
    async getNetwork(creds, networkId) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.networkService.get(deviceHive, networkId);
    }
    async getUser(creds, userId) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.userService.get(deviceHive, userId);
    }
    //   UPDATE ENTITY
    async updateDevice(creds, deviceId, data) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.deviceService.update(deviceHive, deviceId, data);
    }
    async updateDeviceType(creds, deviceTypeId, data) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.deviceTypeService.update(deviceHive, deviceTypeId, data);
    }
    async updateNetwork(creds, networkId, data) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.networkService.update(deviceHive, networkId, data);
    }
    async updateUser(creds, userId, data) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.userService.update(deviceHive, userId, data);
    }
    //   DELETE ENTITY
    async deleteDevice(creds, deviceId) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.deviceService.delete(deviceHive, deviceId);
    }
    async deleteDeviceType(creds, deviceTypeId) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.deviceTypeService.delete(deviceHive, deviceTypeId);
    }
    async deleteNetwork(creds, networkId) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.networkService.delete(deviceHive, networkId);
    }
    async deleteUser(creds, userId) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.userService.delete(deviceHive, userId);
    }
    //   ASSIGN ENTITY
    async assignNetworkId(creds, userId, networkId) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.userService.assignNetworkId(deviceHive, userId, networkId);
    }
    async assignDeviceType(creds, userId, deviceTypeId) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.userService.assignDeviceType(deviceHive, userId, deviceTypeId);
    }
    async refresh(creds, refreshToken) {
        const deviceHive = await this.authService.getDeviceHive(creds);
        return await this.authService.refreshToken(deviceHive, refreshToken);
    }
    async setRoute(env) {
        Route_1.default.setDeviceHiveRoute(env);
    }
}
exports.DeviceHive = DeviceHive;
