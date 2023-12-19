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
    async add(deviceHive, networkData) {
        const Network = DeviceHive.models.Network;
        const network = new Network(networkData);
        return await deviceHive.network.insert(network);
    }
    async update(deviceHive, networkId, networkData) {
        const Network = DeviceHive.models.Network;
        const network = new Network(networkData);
        return await deviceHive.network.update(networkId, network);
    }
    async delete(deviceHive, networkId) {
        return await deviceHive.network.delete(networkId);
    }
}
exports.default = NetworkService;
