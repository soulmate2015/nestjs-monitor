import { createRouteParamDecorator, createParamDecorator, HttpStatus } from '@nestjs/common';
import { ParamsValidateException } from '../exceptions';
import { MessageCode, ResponseStatus } from '../enums';

/**
 * Decode user info
 */
export const User = createRouteParamDecorator((data, req) => {
  if (!req.user) {
    throw new ParamsValidateException('Decode userInfo from token error.');
  }
  return req.user;
});

/**
 * Success response
 */
export const Success = createParamDecorator((data, req) => {
  return (res, ret = {}) => {
    return res.status(HttpStatus.OK).json({
      status: ResponseStatus.SUCCESS,
      code: MessageCode.SUCCESS,
      payload: ret,
    });
  };
});
