import CacheService from '../services/cache.service'

class Route {
  static DEVICEHIVE_ROUTE = 'http://64.227.166.179:8080'
  static REDIS_URL = 'http://64.227.166.179:6379'

  static setDeviceHiveRoute(url: string) {
    this.DEVICEHIVE_ROUTE = url
  }

  static setRedisUrl(client: any) {
    this.REDIS_URL = client
    CacheService.getInstance().connectRedis(client)
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
      case 'pre':
        return 'https://hub-pre.devicethread.com'
      case 'qa':
        return 'http://147.182.200.207:8080'
      case 'qa-ecs':
        return 'http://dt-qa-dhproxy.devicethread.com'
      case 'beta':
        return 'https://hub-beta.devicethread.com'
      case 'releasestage':
        return 'https://hub-releasestage.devicethread.com'
      case 'releaseblue':
        return 'https://hub-releaseblue.devicethread.com'
      case 'releasegreen':
        return 'https://hub-releasegreen.devicethread.com'
      case 'stage':
        return 'http://139.59.25.57:8080'
      default:
        return 'http://64.227.166.179:8080'
    }
  }
}

export default Route
