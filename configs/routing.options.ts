import { RoutingControllersOptions } from 'dt-routing-controllers'
import * as controllers from 'app/controllers'
import * as middlewares from './routing.middlewares'
import * as interceptors from './interceptors'
import { dictToArray } from './utils'
import { ROUTE } from 'app/utils'

export const routingConfigs: RoutingControllersOptions = {
  controllers: dictToArray(controllers),

  middlewares: dictToArray(middlewares),

  interceptors: dictToArray(interceptors),

  // router prefix
  // e.g. api => http://hostname:port/{routePrefix}/{controller.method}
  routePrefix: ROUTE,

  // auto validate entity item
  // learn more: https://github.com/typestack/class-validator
  validation: true,

  // Must be set to false so that the Error response can be customized in our Error middleware
  // This also calls interceptors
  defaultErrorHandler: false,

  // authorizationChecker: authorizationChecker,
  // currentUserChecker: currentUserChecker,
}
