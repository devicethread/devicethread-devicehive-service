"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeviceHive = require('devicehive');
class NetworkService {
    constructor() { }
    async getAll(deviceHive) {
        const NetworkListQuery = DeviceHive.models.query.NetworkListQuery;
        const networkListQuery = new NetworkListQuery();
        const networkList = await deviceHive.network.list(networkListQuery);
        return networkList;
    }
    async get(deviceHive, networkId) {
        return await deviceHive.network.get(networkId);
    }
    async update(deviceHive, networkId, networkData) {
        const Network = DeviceHive.network.Network;
        const network = new Network(networkData);
        await deviceHive.network.update(networkId, network);
    }
    async delete(deviceHive, networkId) {
        await deviceHive.network.delete(networkId);
    }
}
exports.default = NetworkService;
