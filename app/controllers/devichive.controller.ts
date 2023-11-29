import { Creds } from 'app/entities'
import {
  AuthService,
  DeviceService,
  DeviceTypeService,
  NetworkService,
  UserService,
} from 'app/services'

export class DeviceHive {
  constructor(
    private authService: AuthService,
    private deviceTypeService: DeviceTypeService,
    private deviceService: DeviceService,
    private networkService: NetworkService,
    private userService: UserService,
  ) {}

  //  GET ALL ENITITES

  async getDevices(creds: Creds): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.deviceService.getAll(deviceHive)
  }

  async getDeviceTypes(creds: Creds): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.deviceTypeService.getAll(deviceHive)
  }

  async getNetworks(creds: Creds): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.networkService.getAll(deviceHive)
  }

  async getUsers(creds: Creds): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.userService.getAll(deviceHive)
  }

  //   GET SINGLE ENTITY
  async getDevice(creds: Creds, deviceId: string): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.deviceService.get(deviceHive, deviceId)
  }

  async getDeviceType(creds: Creds, deviceTypeId: string): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.deviceTypeService.get(deviceHive, deviceTypeId)
  }

  async getNetwork(creds: Creds, networkId: string): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.networkService.get(deviceHive, networkId)
  }

  async getUser(creds: Creds, userId: string): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.userService.get(deviceHive, userId)
  }

  //   UPDATE ENTITY

  async updateDevice(creds: Creds, deviceId: string, data: any): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.deviceService.update(deviceHive, deviceId, data)
  }

  async updateDeviceType(creds: Creds, deviceTypeId: string, data: any): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.deviceTypeService.update(deviceHive, deviceTypeId, data)
  }

  async updateNetwork(creds: Creds, networkId: string, data: any): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.networkService.update(deviceHive, networkId, data)
  }

  async updateUser(creds: Creds, userId: string, data: any): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.userService.update(deviceHive, userId, data)
  }

  //   DELETE ENTITY

  async deleteDevice(creds: Creds, deviceId: string): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.deviceService.delete(deviceHive, deviceId)
  }

  async deleteDeviceType(creds: Creds, deviceTypeId: string): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.deviceTypeService.delete(deviceHive, deviceTypeId)
  }

  async deleteNetwork(creds: Creds, networkId: string): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.networkService.delete(deviceHive, networkId)
  }

  async deleteUser(creds: Creds, userId: string): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.userService.delete(deviceHive, userId)
  }

  //   ASSIGN ENTITY

  async assignNetworkId(creds: Creds, userId: string, networkId: string): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.userService.assignNetworkId(deviceHive, userId, networkId)
  }

  async assignDeviceType(
    creds: Creds,
    userId: string,
    deviceTypeId: string,
  ): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.userService.assignDeviceType(deviceHive, userId, deviceTypeId)
  }

  async refresh(creds: Creds, refreshToken: string): Promise<any> {
    const deviceHive = await this.authService.getDeviceHive(creds)
    return await this.authService.refreshToken(deviceHive, refreshToken)
  }
}
