import { Module, Global, Scope } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global()
@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: 'CONNECTION',
      useValue: 'I am connection string',
      scope: Scope.TRANSIENT,
      durable: true,
    },
  ],
  exports: [CatsService],
})
export class CatsModule {
  // constructor(private catsService: CatsService) {}
}
