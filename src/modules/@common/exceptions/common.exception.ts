import { HttpException } from '@nestjs/common';
import { MessageCode } from '../enums';

/**
 * 业务异常
 * Business exception without payload
 */
export class BusinessException extends HttpException {
  constructor(message: string, httpStatus: number = 200) {
    super(
      {
        type: 'Business error without payload',
        code: MessageCode.BUSINESS_EXCEPTION,
        message,
      },
      httpStatus,
    );
  }
}

/**
 * 业务异常输出payload
 * Business exception with payload
 */
export class BusinessWithPayloadException extends HttpException {
  constructor(message: string, httpStatus: number = 200) {
    super(
      {
        type: 'Business error with payload',
        code: MessageCode.BUSINESS_EXCEPTION_WITH_PAYLOAD,
        message,
      },
      httpStatus,
    );
  }
}
