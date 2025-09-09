import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface ConfigModuleOptions {
  folder: string;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<ConfigModuleOptions>().build();
