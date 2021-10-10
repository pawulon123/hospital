import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WardEntity } from './ward.entity';
import { WardService } from './ward.service';
import { WardController } from './ward.controller';
import { BedModule } from '../bed/bed.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([WardEntity]),
    BedModule
  ],
  providers: [WardService],
  controllers: [WardController]
})
export class WardModule { }
