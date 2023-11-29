import {
  InterceptorInterface,
  Action,
  Interceptor,
  HttpError,
} from 'dt-routing-controllers'
import { Service } from 'typedi'

@Interceptor()
@Service()
export class ResponseTransformInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any): any {
    if (typeof content === 'object' && content instanceof HttpError) {
      return content
    } else {
      const path: string = action.context.request.url
      if (path.includes('/st')) {
        return Object.assign(content)
      }
      return Object.assign({ message: 'Success' }, { data: content })
    }
  }
}
