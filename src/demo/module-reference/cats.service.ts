import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ContextIdFactory, ModuleRef, REQUEST } from '@nestjs/core';
import { TransientService } from './transient.service';

@Injectable()
export class CatsService implements OnModuleInit {
  private transientService: TransientService;
  constructor(
    private moduleRef: ModuleRef,
    @Inject(REQUEST) private request: Record<string, unknown>,
  ) {}

  async onModuleInit() {
    // this.transientService = this.moduleRef.get(TransientService, {
    //   strict: false,
    // });

    // this.transientService = await this.moduleRef.resolve(TransientService);

    // const transientServices = await Promise.all([
    //   this.moduleRef.resolve(TransientService),
    //   this.moduleRef.resolve(TransientService),
    // ]);
    // console.log(transientServices[0] === transientServices[1]); // false

    // const contextId = ContextIdFactory.create();
    // const transientServices = await Promise.all([
    //   this.moduleRef.resolve(TransientService, contextId),
    //   this.moduleRef.resolve(TransientService, contextId),
    // ]);
    // console.log(transientServices[0] === transientServices[1]); // true

    // const contextId = ContextIdFactory.create();
    // this.moduleRef.registerRequestByContextId(TransientService, contextId);

    const contextId = ContextIdFactory.getByRequest(this.request);
    await this.moduleRef.resolve(TransientService, contextId);
  }
}
