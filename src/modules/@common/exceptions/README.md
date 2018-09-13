## 抛出异常


| <异常名称>                      | <描述>                           | <异常类型>                       | <异常状态码>   |
| :----------------------------  | :------------------------------- | :------------------------------ | :------------- |
| `ParamsValidateException`      | `参数校验错误`                    | `Params validate error`         | `100001`       |
| `SystemException`              | `系统内部错误`                    | `System error`                  | `200001`       |
| `TimeoutException`             | `请求超时`                        | `Timeout error`                 | `300001`       |
| `BusinessException`            | `业务错误`                        | `Business error without payload`| `800001`       |
| `BusinessWithPayloadException` | `业务错误, 需要展示payload`       | `Business error with payload`    | `800011`       |
| `TokenInvalidException`        | `没有提供有效Token`               | `Token invalid error`           | `900001`        |
| `TokenInvalidException`        | `Token过期`                      | `Token expire error`             | `900002`       |