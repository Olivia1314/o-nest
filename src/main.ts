/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpAdapterHost, LazyModuleLoader, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { AllExceptionsFilter } from './filter/all-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { RolesGuard } from './guard/roles.guard';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { CacheInterceptor } from './interceptor/cache.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('query parser', 'extended');

  // app.useGlobalFilters(new HttpExceptionFilter()); // 全局范围

  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  // app.useGlobalPipes(new ValidationPipe());

  // app.useGlobalGuards(new RolesGuard());

  // app.useGlobalInterceptors(new LoggingInterceptor());
  // app.useGlobalInterceptors(new TransformInterceptor(), new CacheInterceptor());

  // "app" represents a Nest application instance
  // const lazyModuleLoader = app.get(LazyModuleLoader);

  // Starts listening for shutdown hooks
  // app.enableShutdownHooks();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
