import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WardEntity } from './ward.entity';
import { WardService } from './ward.service';

@Module({
  imports: [TypeOrmModule.forFeature([WardEntity])],
  providers: [WardService]
})
export class WardModule {}
