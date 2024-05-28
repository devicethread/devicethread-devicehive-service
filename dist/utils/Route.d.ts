declare class Route {
    static DEVICEHIVE_ROUTE: string;
    static setDeviceHiveRoute(env: string): void;
    static getUrls(env: string): "http://64.227.166.179:8080" | "https://hub.devicethread.com" | "https://hub-sandbox.devicethread.com" | "https://hub-sandbox-new.devicethread.com" | "https://hub-eut.devicethread.com" | "http://147.182.200.207:8080" | "https://hub-beta.devicethread.com" | "http://139.59.25.57:8080";
}
export default Route;
