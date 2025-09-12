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
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { RolesGuard } from './guard/roles.guard';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
// import { HttpExceptionFilter } from './filter/http-exception.filter';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    CatsModule,
    UsersModule,
    AuthModule,
    // ConfigModule.forRoot({ folder: './config' }),

    /*
    // <-- this class must provide the "createConfigOptions" method
    // eg.
    // @Injectable()
    // class ConfigModuleOptionsFactory {
    //   createConfigOptions(): ConfigModuleOptions {
    //     return {
    //       // 返回实际的配置对象
    //       envFilePath: '.env.production',
    //       // 其他配置项...
    //     };
    //   }
    // }
    ConfigModule.registerAsync({
      useClass: ConfigModuleOptionsFactory, 
    })
    */
  ],
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

    /* // 注入 LoggingInterceptor 依赖项
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    */
  ],
})
export class AppModule implements NestModule {
  configure(customer: MiddlewareConsumer) {
    customer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
