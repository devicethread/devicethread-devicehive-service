const DeviceHive = require('devicehive')

class NetworkService {
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

  async add(deviceHive: any, networkData: any) {
    const Network = DeviceHive.models.Network
    const network = new Network(networkData)
    return await deviceHive.network.insert(network)
  }

  async update(deviceHive: any, networkId: string, networkData: any) {
    const Network = DeviceHive.models.Network
    const network = new Network(networkData)
    return await deviceHive.network.update(networkId, network)
  }

  async delete(deviceHive: any, networkId: string) {
    return await deviceHive.network.delete(networkId)
  }
}

export default NetworkService
