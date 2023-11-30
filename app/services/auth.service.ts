const DeviceHive = require('devicehive')
import { Creds } from '../entities'
import Route from '../utils/Route'

class AuthService {
  constructor() {}

  async getDeviceHive(creds: Creds) {
    try {
      const httpDeviceHive = new DeviceHive({
        login: creds.login,
        password: creds.password,
        mainServiceURL: Route.DEVICEHIVE_ROUTE + '/api/rest',
        authServiceURL: Route.DEVICEHIVE_ROUTE + '/auth/rest',
        pluginServiceURL: Route.DEVICEHIVE_ROUTE + '/api/rest',
      })
      await httpDeviceHive.connect()
      return httpDeviceHive
    } catch (error) {
      console.log(error)
    }
  }

  async refreshToken(deviceHive: any, refreshToken: string) {
    const authData = await deviceHive.token.refresh(refreshToken)
  }
}

export default AuthService
