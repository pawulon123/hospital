import { Module } from '@nestjs/common';
import { JgpNfzService } from './jgp-nfz.service';
import { JgpNfzController } from './jgp-nfz.controller';

@Module({
  providers: [JgpNfzService],
  controllers: [JgpNfzController]
})
export class JgpNfzModule {}
