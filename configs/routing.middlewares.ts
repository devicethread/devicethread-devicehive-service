import { KoaMiddlewareInterface, Middleware } from 'dt-routing-controllers'
import { Service } from 'typedi'

@Middleware({ type: 'before' })
@Service()
export class HeaderMiddleware implements KoaMiddlewareInterface {
  async use(context: any, next: (err?: any) => any): Promise<any> {
    context.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE,PATCH')
    context.set(
      'Access-Control-Allow-Origin',
      context.request.header.origin || context.request.origin,
    )
    context.set('Access-Control-Allow-Headers', ['content-type'])
    context.set('Access-Control-Allow-Credentials', 'true')
    context.set('Content-Type', 'application/json; charset=utf-8')
    return next()
  }
}

@Middleware({ type: 'before' })
@Service()
export class EntryLogMiddleware implements KoaMiddlewareInterface {
  async use(context: any, next: (err?: any) => any): Promise<any> {
    // Does the payload has the NAME of the controller method, like Controller.getCollections?
    // logger.logTrace('--- Start of method {controller}.{method} --- ');
    return next();
  }
}

@Middleware({ type: 'after' })
@Service()
export class ExitLogMiddleware implements KoaMiddlewareInterface {
  async use(context: any, next: (err?: any) => any): Promise<any> {
    // Does the payload has the NAME of the controller method?
    // logger.logTrace('--- End of method {controller}.{method} --- ');
  }
}