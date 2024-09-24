declare class Route {
    static DEVICEHIVE_ROUTE: string;
    static REDIS_URL: string;
    static setDeviceHiveRoute(url: string): void;
    static setRedisUrl(client: any): void;
    static getUrls(env: string): "http://64.227.166.179:8080" | "https://hub.devicethread.com" | "https://hub-sandbox.devicethread.com" | "https://hub-sandbox-new.devicethread.com" | "https://hub-eut.devicethread.com" | "https://hub-pre.devicethread.com" | "http://147.182.200.207:8080" | "http://dt-qa-dhproxy.devicethread.com" | "https://hub-beta.devicethread.com" | "https://hub-releasestage.devicethread.com" | "https://hub-releaseblue.devicethread.com" | "https://hub-releasegreen.devicethread.com" | "http://139.59.25.57:8080";
}
export default Route;
