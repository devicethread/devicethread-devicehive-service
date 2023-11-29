import { Service } from 'typedi'
const DeviceHive = require('devicehive')

@Service()
export class NetworkService {
  constructor() {}

  async getAll(deviceHive: any) {
    const NetworkListQuery = DeviceHive.models.query.NetworkListQuery
    const networkListQuery = new NetworkListQuery()
    const networkList = await deviceHive.network.list(networkListQuery)
    return networkList
  }

  async get(deviceHive: any, networkId: string) {
    return await deviceHive.network.get(networkId)
  }

  async update(deviceHive: any, networkId: string, networkData: any) {
    const Network = DeviceHive.network.Network
    const network = new Network(networkData)
    await deviceHive.network.update(networkId, network)
  }

  async delete(deviceHive: any, networkId: string) {
    await deviceHive.network.delete(networkId)
  }
}
