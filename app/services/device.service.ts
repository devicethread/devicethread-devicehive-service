const DeviceHive = require('devicehive')

class DeviceService {
  constructor() {}

  async getAll(deviceHive: any) {
    const DeviceListQuery = DeviceHive.models.query.DeviceListQuery
    const deviceListQuery = new DeviceListQuery()
    const deviceList = await deviceHive.device.list(deviceListQuery)
    return deviceList
  }

  async get(deviceHive: any, deviceId: string) {
    return await deviceHive.device.get(deviceId)
  }

  async update(deviceHive: any, deviceId: string, data: any) {
    const Device = DeviceHive.models.Device
    const device = new Device({ id: deviceId, ...data })
    return await deviceHive.device.add(device)
  }

  async delete(deviceHive: any, deviceId: string) {
    return await deviceHive.device.delete(deviceId)
  }
}

export default DeviceService