import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
// import { APP_FILTER } from '@nestjs/core';
// import { HttpExceptionFilter } from './filter/http-exception.filter';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    // 注入HttpExceptionFilter依赖项
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(customer: MiddlewareConsumer) {
    customer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
