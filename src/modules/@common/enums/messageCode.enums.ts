/**
 * message code
 */

export enum MessageCode {
  /**
   * 成功
   * success
   */
  SUCCESS = '000000',

  /**
   * 参数校验异常
   * Request params validate exception
   */
  VALIDATE_EXCEPTION = '100001',

  /**
   * 系统异常
   * System exception
   */
  SYSTEM_EXCEPTION = '200001',

  /**
   * 请求超时异常
   * Timeout exception
   */
  TIMEOUT_EXCEPTION = '300001',

  /**
   * 业务异常
   * Business exception without payload
   */
  BUSINESS_EXCEPTION = '800001',

  /**
   * 业务异常输出payload
   * Business exception with payload
   */
  BUSINESS_EXCEPTION_WITH_PAYLOAD = '800011',

  /**
   * 无效Token
   * Token invalid exception
   */
  TOKEN_INVALID_EXCEPTION = '900001',

  /**
   * Token过期
   * Token expire exception
   */
  TOKEN_EXPIRE_EXCEPTION = '900002',
}