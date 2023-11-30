declare class Route {
    static DEVICEHIVE_ROUTE: string;
    static setDeviceHiveRoute(env: string): void;
    static getUrls(env: string): "http://64.227.166.179:8080" | "https://hub.devicethread.com" | "https://hub-sandbox.devicethread.com" | "https://hub-qa.dthreaddev.com" | "https://hub-beta.devicethread.com";
}
export default Route;
