"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeviceHive = require('devicehive');
class UserService {
    constructor() { }
    async getAll(deviceHive) {
        try {
            const UserListQuery = DeviceHive.models.query.UserListQuery;
            const userListQuery = new UserListQuery();
            const userList = await deviceHive.user.list(userListQuery);
            return userList;
        }
        catch (error) {
            console.log(error);
        }
    }
    async get(deviceHive, userId) {
        return await deviceHive.user.get(userId);
    }
    async update(deviceHive, userId, userData) {
        const User = DeviceHive.user.User;
        const user = new User(userData);
        await deviceHive.user.update(userId, user);
    }
    async delete(deviceHive, userId) {
        await deviceHive.user.delete(userId);
    }
    async assignDeviceType(deviceHive, userId, deviceTypeId) {
        await deviceHive.user.assignDeviceType(userId, deviceTypeId);
    }
    async assignNetworkId(deviceHive, userId, networkId) {
        await deviceHive.user.assignNetworkId(userId, networkId);
    }
}
exports.default = UserService;
