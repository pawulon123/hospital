import { Module } from '@nestjs/common';
import { BedController } from './bed.controller';

@Module({
  controllers: [BedController]
})
export class BedModule {}
