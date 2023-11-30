const DeviceHive = require('devicehive')
import { Creds } from '../entities'
import { DEVICEHIVE_ROUTE } from '../utils'

class AuthService {
  constructor() {}

  async getDeviceHive(creds: Creds) {
    try {
      const httpDeviceHive = new DeviceHive({
        login: creds.login,
        password: creds.password,
        mainServiceURL: DEVICEHIVE_ROUTE + '/api/rest',
        authServiceURL: DEVICEHIVE_ROUTE + '/auth/rest',
        pluginServiceURL: DEVICEHIVE_ROUTE + '/api/rest',
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