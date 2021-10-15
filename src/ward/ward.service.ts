import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WardEntity } from './ward.entity';
@Injectable()
export class WardService {
    constructor(
        @InjectRepository(WardEntity)
        private wardRepository: Repository<WardEntity>,
    ) { }
    async index() {
        return await this.wardRepository.find();
    }
    async one(id) {
        return await this.wardRepository.createQueryBuilder("ward")
            .innerJoinAndSelect("ward.rooms", "room")
            .leftJoinAndSelect("room.beds", "bed")
            .leftJoinAndSelect("bed.patient", "patient")
            .leftJoinAndSelect("patient.stays", "stay")
            .leftJoinAndSelect("stay.jgpNfz", "jgpNfz")
            .where("ward.id = :id", { id: id })
            .getOne()
    }
}
