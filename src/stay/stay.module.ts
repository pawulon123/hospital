import { Module } from '@nestjs/common';
import { StayService } from './stay.service';
import { StayController } from './stay.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StayEntity } from './stay.entity';

@Module({
  imports:[TypeOrmModule.forFeature([StayEntity])],
  providers: [StayService],
  controllers: [StayController]
})
export class StayModule {}
