import { Module } from '@nestjs/common';
import { WardUserService } from './ward-user.service';

@Module({
  providers: [WardUserService]
})
export class WardUserModule {}
