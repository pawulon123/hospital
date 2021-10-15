
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JgpNfzEntity } from './jgp-nfz.entity';
import { JgpNfzDto } from './jgp-nfz.dto'
import { HttpException } from '@nestjs/common';
@Injectable()
export class JgpNfzService {
    constructor(
        @InjectRepository(JgpNfzEntity)
        private jgpNfzRepository: Repository<JgpNfzEntity>,
    ) { }
    async index(): Promise<JgpNfzDto[]> {
        return await this.jgpNfzRepository.find({ relations: ["patient"] });
    }
    async findOne(id: string): Promise<JgpNfzDto> {
        return await this.jgpNfzRepository.findOne(id, { relations: ["patient"] });
    }
    async create(jgpNfz: JgpNfzDto): Promise<JgpNfzEntity> {
        return await this.jgpNfzRepository.save(jgpNfz);
    }
    async update(id: string, body: JgpNfzDto): Promise<boolean> {
        return (await this.jgpNfzRepository.update(id, body)).affected === 1 ? true : false;
    }
    async destroy(id: string): Promise<boolean> {
        return (await this.jgpNfzRepository.delete(id)).affected === 1 ? true : false;
    }
    private ifItDoesNotExistInRepository() {
        throw new HttpException('404 not found', HttpStatus.NOT_FOUND);
    }
}
