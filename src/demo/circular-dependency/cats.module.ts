import { forwardRef, Module } from '@nestjs/common';
import { CommonModule } from './common.module';

@Module({
  imports: [forwardRef(() => CommonModule)],
})
export class CatsModule {}
