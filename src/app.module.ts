/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  ValidationPipe,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { RolesGuard } from './guard/roles.guard';
// import { HttpExceptionFilter } from './filter/http-exception.filter';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    /*// 注入HttpExceptionFilter依赖项
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },*/

    /*// 注入ValidationPipe依赖项
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },*/

    /* // 注入 RolesGuard 依赖项
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },*/
  ],
})
export class AppModule implements NestModule {
  configure(customer: MiddlewareConsumer) {
    customer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
