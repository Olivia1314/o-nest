import { LazyModuleLoader } from '@nestjs/core';
import { LazyModule } from './lazy.module';
import { OnModuleInit } from '@nestjs/common';
import { LazyService } from './lazy.service';

export class CatsService implements OnModuleInit {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}

  async onModuleInit() {
    const moduleRef = await this.lazyModuleLoader.load(() => LazyModule);
    const lazyService = moduleRef.get(LazyService);
  }
}
