import { Module } from '@nestjs/common';
import { RoomService } from './room.service';


@Module({
  providers: [RoomService],
  controllers: []
})
export class RoomModule {}
