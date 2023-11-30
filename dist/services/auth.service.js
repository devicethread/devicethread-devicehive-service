"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeviceHive = require('devicehive');
const utils_1 = require("../utils");
class AuthService {
    constructor() { }
    async getDeviceHive(creds) {
        try {
            const httpDeviceHive = new DeviceHive({
                login: creds.login,
                password: creds.password,
                mainServiceURL: utils_1.DEVICEHIVE_ROUTE + '/api/rest',
                authServiceURL: utils_1.DEVICEHIVE_ROUTE + '/auth/rest',
                pluginServiceURL: utils_1.DEVICEHIVE_ROUTE + '/api/rest',
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
