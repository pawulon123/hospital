import { WardUserModule } from './../ward-user/ward-user.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { WardUserService } from '../ward-user/ward-user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    WardUserModule
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}

