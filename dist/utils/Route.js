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
            case 'sandbox-new':
                return 'https://hub-sandbox-new.devicethread.com';
            case 'eut':
                return 'https://hub-eut.devicethread.com';
            case 'qa':
                return 'http://147.182.200.207:8080';
            case 'beta':
                return 'https://hub-beta.devicethread.com';
            case 'stage':
                return 'http://139.59.25.57:8080';
            default:
                return 'http://64.227.166.179:8080';
        }
    }
}
Route.DEVICEHIVE_ROUTE = 'http://64.227.166.179:8080';
exports.default = Route;
