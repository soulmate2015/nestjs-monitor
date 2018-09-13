import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import * as Exceptions from '../exceptions';

@Catch(
  Exceptions.BusinessException,
  Exceptions.BusinessWithPayloadException,
  Exceptions.ParamsValidateException,
  Exceptions.SystemException,
  Exceptions.TimeoutException,
  Exceptions.TokenExpireException,
  Exceptions.TokenInvalidException,
)
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const { type, message, code, payload } = exception.getResponse();
    const httpStatus = exception.getStatus();

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    // const request = ctx.getRequest();

    if (payload) {
      response.status(httpStatus).json({ status: 'failed', type, code, message, payload });
    } else {
      response.status(httpStatus).json({ status: 'failed', type, code, message });
    }
  }
}