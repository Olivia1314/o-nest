/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Inject, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { MODULE_OPTIONS_TOKEN } from './config.module-definition';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  // constructor(@Inject('CONFIG_OPTIONS') private options: Record<string, any>) {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: any) {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const evtFile = path.resolve(__dirname, '../../', options.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(evtFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
