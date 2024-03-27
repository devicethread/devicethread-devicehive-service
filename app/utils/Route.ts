class Route {
  static DEVICEHIVE_ROUTE = 'http://64.227.166.179:8080'

  static setDeviceHiveRoute(env: string) {
    this.DEVICEHIVE_ROUTE = this.getUrls(env)
  }

  static getUrls(env: string) {
    switch (env) {
      case 'prod':
        return 'https://hub.devicethread.com'
      case 'sandbox':
        return 'https://hub-sandbox.devicethread.com'
      case 'sandbox-new':
        return 'https://hub-sandbox-new.devicethread.com'
      case 'eut':
        return 'https://hub-eut.devicethread.com'
      case 'qa':
        return 'http://147.182.200.207:8080'
      case 'beta':
        return 'https://hub-beta.devicethread.com'
      default:
        return 'http://64.227.166.179:8080'
    }
  }
}

export default Route
