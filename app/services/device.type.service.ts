const DeviceHive = require('devicehive')

class DeviceTypeService {
  constructor() {}

  async getAll(deviceHive: any) {
    const DeviceTypeListQuery = DeviceHive.models.query.DeviceTypeListQuery
    const deviceTypeListQuery = new DeviceTypeListQuery()
    const deviceTypeList = await deviceHive.network.list(deviceTypeListQuery)
    return deviceTypeList
  }

  async get(deviceHive: any, deviceTypeId: string) {
    return await deviceHive.deviceType.get(deviceTypeId)
  }

  async update(deviceHive: any, deviceTypeId: string, deviceTypeData: any) {
    const DeviceType = DeviceHive.deviceType.DeviceType
    const deviceType = new DeviceType(deviceTypeData)
    await deviceHive.deviceType.update(deviceTypeId, deviceType)
  }

  async delete(deviceHive: any, deviceTypeId: string) {
    await deviceHive.deviceType.delete(deviceTypeId)
  }
}

export default DeviceTypeService
