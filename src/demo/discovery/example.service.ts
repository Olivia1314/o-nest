/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { DiscoveryService } from '@nestjs/core';
import { FeatureFlag } from './feature-flag';

@Injectable()
@FeatureFlag('experimental')
export class ExampleService {
  constructor(private discoveryService: DiscoveryService) {}

  getProviders() {
    return this.discoveryService.getProviders();
  }

  getControllers() {
    return this.discoveryService.getControllers();
  }

  getMetadataByDecorators() {
    this?.getProviders()?.filter((item) => {
      this.discoveryService.getMetadataByDecorator(FeatureFlag, item) ===
        'experimental';
    });
  }
}
