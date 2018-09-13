import { HttpException } from '@nestjs/common';
import { MessageCode } from '../enums';

/**
 * 参数校验异常
 * Request params validate exception
 */
export class ParamsValidateException extends HttpException {
  constructor(message: string, httpStatus: number = 200) {
    super(
      {
        type: 'Params validate error',
        code: MessageCode.VALIDATE_EXCEPTION,
        message,
      },
      httpStatus,
    );
  }
}
