import { Creds } from 'app/entities'
import { DEVICEHIVE_ROUTE } from 'app/utils'
// import { DeviceHive } from 'devicehive'
const DeviceHive = require('devicehive')
import { Service } from 'typedi'

@Service()
export class AuthService {
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
