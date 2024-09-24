"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeviceHive = require('devicehive');
const Route_1 = require("../utils/Route");
class AuthService {
    constructor() { }
    async getDeviceHive(creds) {
        try {
            const httpDeviceHive = new DeviceHive({
                login: creds.login,
                password: creds.password,
                mainServiceURL: Route_1.default.DEVICEHIVE_ROUTE,
                authServiceURL: Route_1.default.DEVICEHIVE_ROUTE,
                pluginServiceURL: Route_1.default.DEVICEHIVE_ROUTE,
            });
            await httpDeviceHive.connect();
            return httpDeviceHive;
        }
        catch (error) {
            console.log(error);
        }
    }
    async refreshToken(deviceHive, refreshToken) {
        const authData = await deviceHive.token.refresh(refreshToken);
    }
}
exports.default = AuthService;
