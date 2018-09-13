import { HttpException } from '@nestjs/common';
import { MessageCode } from '../enums';

/**
 * 无效Token
 * Token invalid exception
 */
export class TokenInvalidException extends HttpException {
  constructor(message: string, httpStatus: number = 200) {
    super(
      {
        type: 'Token invalid error',
        code: MessageCode.TOKEN_INVALID_EXCEPTION,
        message,
      },
      httpStatus,
    );
  }
}

/**
 * Token过期
 * Token expire exception
 */
export class TokenExpireException extends HttpException {
  constructor(message: string, httpStatus: number = 200) {
    super(
      {
        type: 'Token expire error',
        code: MessageCode.TOKEN_EXPIRE_EXCEPTION,
        message,
      },
      httpStatus,
    );
  }
}
