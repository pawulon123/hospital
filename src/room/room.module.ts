import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from './room.entity';
import { RoomService } from './room.service';


@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity])],
  providers: [RoomService],
  controllers: []
})
export class RoomModule {}
