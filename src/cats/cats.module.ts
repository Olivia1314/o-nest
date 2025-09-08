import { Module, Global } from '@nestjs/common';
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
    },
  ],
  exports: [CatsService],
})
export class CatsModule {
  // constructor(private catsService: CatsService) {}
}
