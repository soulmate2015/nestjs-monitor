import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ApplicationModule } from './modules/app.module';
import { Debug } from './modules/@common/utils';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CommonExceptionFilter } from './modules/@common/filters';

// Environment variable
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.join('./config', `${process.env.NODE_ENV}.env`) });

// Define variable
declare const module: any;
const debug = Debug('dev:[Main]');
const logger = new Logger('Main.hmr');

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, {
    bodyParser: true,
    cors: true,
  });

  /**
   * Middleware
   * 中间件
   */
  // await app.use()

  /**
   * Global filters
   * 异常捕获
   */
  await app.useGlobalFilters(
    // Common filter
    new CommonExceptionFilter(),
  );

  /**
   * Swagger
   * API文档
   */
  const options = new DocumentBuilder()
  .setTitle('Monitor')
  .setDescription('Monitor API description')
  .setVersion(process.env.PROJECT_VERSION)
  .addTag('')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  /**
   * Listen
   * 监听端口
   */
  await app.listen(process.env.PROJECT_PORT, () => logger.log(`Server listen on: ${process.env.PROJECT_PORT}`));

  /**
   * Hot module
   * 热加载
   */
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
