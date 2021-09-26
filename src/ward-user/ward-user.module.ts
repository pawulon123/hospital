import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WardUserEntity } from './ward-user.entity';
import { WardUserService } from './ward-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([WardUserEntity])],
  providers: [WardUserService],
  exports:[WardUserService]
})
export class WardUserModule {}
