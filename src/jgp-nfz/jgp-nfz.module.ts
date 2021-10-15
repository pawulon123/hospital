
import { Module } from '@nestjs/common';
import { JgpNfzService } from './jgp-nfz.service';
import { JgpNfzController } from './jgp-nfz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JgpNfzEntity } from './jgp-nfz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JgpNfzEntity])],
  providers: [JgpNfzService],
  controllers: [JgpNfzController]
})
export class JgpNfzModule {}
