import { Service } from 'typedi'
const DeviceHive = require('devicehive')

@Service()
export class DeviceService {
  constructor() {}

  async getAll(deviceHive: any) {
    const DeviceListQuery = DeviceHive.models.query.DeviceListQuery
    const deviceListQuery = new DeviceListQuery()
    const deviceList = await deviceHive.device.list(deviceListQuery)
    return deviceList
  }1

  async get(deviceHive: any, deviceId: string) {
    return await deviceHive.device.get(deviceId)
  }

  async update(deviceHive: any, deviceId: string, data: any) {
    const Device = DeviceHive.models.Device
    const device = new Device({ id: deviceId, ...data })
    await deviceHive.device.add(device)
  }

  async delete(deviceHive: any, deviceId: string) {
    await deviceHive.device.delete(deviceId)
  }
}
