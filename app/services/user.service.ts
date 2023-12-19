const DeviceHive = require('devicehive')

class UserService {
  constructor() {}

  async getAll(deviceHive: any) {
    try {
      const UserListQuery = DeviceHive.models.query.UserListQuery
      const userListQuery = new UserListQuery()
      const userList = await deviceHive.user.list(userListQuery)
      return userList
    } catch (error) {
      console.log(error)
    }
  }

  async get(deviceHive: any, userId: string) {
    return await deviceHive.user.get(userId)
  }

  async add(deviceHive: any, userData: any) {
    const User = DeviceHive.models.User
    const user = new User(userData)
    await deviceHive.user.insert(user)
  }

  async update(deviceHive: any, userId: string, userData: any) {
    const User = DeviceHive.models.User
    const user = new User(userData)
    await deviceHive.user.update(userId, user)
  }

  async delete(deviceHive: any, userId: string) {
    await deviceHive.user.delete(userId)
  }

  async assignDeviceType(deviceHive: any, userId: string, deviceTypeId: string) {
    await deviceHive.user.assignDeviceType(userId, deviceTypeId)
  }

  async assignNetworkId(deviceHive: any, userId: string, networkId: string) {
    await deviceHive.user.assignNetwork(userId, networkId)
  }
}

export default UserService
