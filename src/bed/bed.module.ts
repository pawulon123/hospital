import { Module } from '@nestjs/common';
import { BedController } from './bed.controller';
import { BedService } from './bed.service';
import { BedEntity } from './bed.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BedEntity])],
  controllers: [BedController],
  providers:[BedService],
  exports:[BedService]
})
export class BedModule {}
