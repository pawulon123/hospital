import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WardEntity } from './ward.entity';
import { WardService } from './ward.service';
import { WardController } from './ward.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WardEntity])],
  providers: [WardService],
  controllers: [WardController]
})
export class WardModule {}
