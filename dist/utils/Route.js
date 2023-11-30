"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Route {
    static setDeviceHiveRoute(env) {
        this.DEVICEHIVE_ROUTE = this.getUrls(env);
    }
    static getUrls(env) {
        switch (env) {
            case 'prod':
                return 'https://hub.devicethread.com';
            case 'sandbox':
                return 'https://hub-sandbox.devicethread.com';
            case 'qa':
                return 'https://hub-qa.dthreaddev.com';
            case 'beta':
                return 'https://hub-beta.devicethread.com';
            default:
                return 'http://64.227.166.179:8080';
        }
    }
}
Route.DEVICEHIVE_ROUTE = 'http://64.227.166.179:8080';
exports.default = Route;
