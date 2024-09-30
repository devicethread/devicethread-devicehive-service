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
        mainServiceURL: Route.DEVICEHIVE_ROUTE,
        authServiceURL: Route.DEVICEHIVE_ROUTE.replace('/api/rest', '/auth/rest'),
        pluginServiceURL: Route.DEVICEHIVE_ROUTE,
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
