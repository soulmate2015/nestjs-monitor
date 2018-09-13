import { HttpException } from '@nestjs/common';
import { MessageCode } from '../enums';

/**
 * 系统异常
 * System exception
 */
export class SystemException extends HttpException {
  constructor(message: string, httpStatus: number = 200) {
    super(
      {
        type: 'System error',
        code: MessageCode.SYSTEM_EXCEPTION,
        message,
      },
      httpStatus,
    );
  }
}

/**
 * 请求超时异常
 * Timeout exception
 */
export class TimeoutException extends HttpException {
  constructor(message: string, httpStatus: number = 200) {
    super(
      {
        type: 'Timeout error',
        code: MessageCode.TIMEOUT_EXCEPTION,
        message,
      },
      httpStatus,
    );
  }
}
