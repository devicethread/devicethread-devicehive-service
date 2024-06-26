const DeviceHive = require('devicehive')

class DeviceTypeService {
  constructor() {}

  async getAll(deviceHive: any) {
    const DeviceTypeListQuery = DeviceHive.models.query.DeviceTypeListQuery
    const deviceTypeListQuery = new DeviceTypeListQuery()
    const deviceTypeList = await deviceHive.deviceType.list(deviceTypeListQuery)
    return deviceTypeList
  }

  async get(deviceHive: any, deviceTypeId: string) {
    return await deviceHive.deviceType.get(deviceTypeId)
  }

  async add(deviceHive: any, deviceTypeData: any) {
    const DeviceType = DeviceHive.models.DeviceType
    const deviceType = new DeviceType(deviceTypeData)
    return await deviceHive.deviceType.insert(deviceType)
  }

  async update(deviceHive: any, deviceTypeId: string, deviceTypeData: any) {
    const DeviceType = DeviceHive.models.DeviceType
    const deviceType = new DeviceType(deviceTypeData)
    return await deviceHive.deviceType.update(deviceTypeId, deviceType)
  }

  async delete(deviceHive: any, deviceTypeId: string) {
    const DeviceTypeDeleteQuery = DeviceHive.models.query.DeviceTypeDeleteQuery
    const deviceTypeDeleteQuery = new DeviceTypeDeleteQuery({ deviceTypeId })
    return await deviceHive.deviceType.delete(deviceTypeDeleteQuery)
  }
}

export default DeviceTypeService
