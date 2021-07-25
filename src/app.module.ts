import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TreatmentModule } from './treatment/treatment.module';
import { WardModule } from './ward/ward.module';
import { RoomModule } from './room/room.module';
import { BedModule } from './bed/bed.module';
import { PatientModule } from './patient/patient.module';
import { StayModule } from './stay/stay.module';
import { JgpNfzModule } from './jgp-nfz/jgp-nfz.module';
import { IllnessModule } from './illness/illness.module';
import { BedService } from './bed/bed.service';
import configDb from './config.db';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configDb()),
    TreatmentModule,
    WardModule,
    RoomModule,
    BedModule,
    PatientModule,
    StayModule,
    JgpNfzModule,
    IllnessModule,

  ],
  controllers: [AppController],
  providers: [AppService, BedService],
})
export class AppModule {}
