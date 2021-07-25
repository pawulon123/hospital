import { Module } from '@nestjs/common';
import { IllnessService } from './illness.service';

@Module({
  providers: [IllnessService]
})
export class IllnessModule {}
