import 'joi-i18n';
import * as Joi from 'joi';

Joi.addLocaleData('zh-CN', {
  /**
   * using joi's template syntax.
   * err.details[0].context === { key: 'username', label: 'username' }
   * optional parameter, to provide context to your error if you are using the template
   * path: joi/lib/language.js
   */
  any: {
    required: '"{{label}}({{key}})"是必须的参数.',
    allowOnly: '"{{label}}({{key}})"必须是下列数值之一:{{valids}}.',
    empty: '"{{label}}({{key}})"不允许为空.',
    unknown: '"{{label}}({{key}})"是不允许的参数.',
  },
  string: {
    base: '"{{label}}({{key}})"必须是字符串类型.',
  },
  number: {
    base: '"{{label}}({{key}})"必须是数字类型.',
  },
  object: {
    base: '"{{label}}({{key}})"必须是对象类型.',
    allowUnknown: '!!"{{!child}}"是不允许的参数.',
  },
});

export { Joi };
