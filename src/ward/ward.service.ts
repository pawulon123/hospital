import { BedService } from './../bed/bed.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WardEntity } from './ward.entity';
@Injectable()
export class WardService {
    constructor(
        @InjectRepository(WardEntity)
        private wardRepository: Repository<WardEntity>,
        private bedService: BedService 
    ) { }
    async index() {
        return await this.wardRepository.find();
    }
    async one(id) {
        const schema = await this.wardRepository.findOne(id, {relations: ["rooms", "rooms.beds"]});
        console.log(schema);
        
        return this.bedService.indexInWard(schema.rooms.map(room => room.beds.map(bed => bed.id).join()))
        // }
        // return await this.wardRepository.findOne(id, {relations: ["rooms", "rooms.beds"]});
    }
    
}
