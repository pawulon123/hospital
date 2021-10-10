import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { BedEntity } from './bed.entity';
import { BedDto } from './bed.dto'
import { HttpException } from '@nestjs/common';

@Injectable()
export class BedService {
    constructor(
        @InjectRepository(BedEntity)
        private bedRepository: Repository<BedEntity>,
    ) { }
    async index(): Promise<BedDto[]> {
        return await this.bedRepository.find({relations: ["patient"]});
    }
    async findOne(id: string): Promise<BedDto> {
        return await this.bedRepository.findOne(id, {relations: ["patient"]});
    }
    async create(bed: BedDto): Promise<BedEntity> {
        return await this.bedRepository.save(bed);
    }
    async update(id: string, body: BedDto): Promise<boolean> {
        return (await this.bedRepository.update(id, body)).affected === 1 ? true : false;
    }
    async destroy(id: string): Promise<boolean> {
        return (await this.bedRepository.delete(id)).affected === 1 ? true : false;
    }
    private ifItDoesNotExistInRepository() {
        throw new HttpException('404 not found', HttpStatus.NOT_FOUND);
    }
   
}

