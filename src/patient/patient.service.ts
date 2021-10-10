import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientDto } from './patient.dto';
import { PatientEntity } from './patient.entity';

@Injectable()
export class PatientService {
    constructor(
        @InjectRepository(PatientEntity)
        private bedRepository: Repository<PatientEntity>,
    ) { }
    async index(): Promise<PatientDto[]> {
        return await this.bedRepository.find();
    }
    async findOne(id: string): Promise<PatientDto> {
        return await this.bedRepository.findOne(id);
    }
    async create(bed: PatientDto): Promise<PatientEntity> {
        return await this.bedRepository.save(bed);
    }
    async update(id: string, body: PatientDto): Promise<boolean> {
        return (await this.bedRepository.update(id, body)).affected === 1 ? true : false;
    }
    async destroy(id: string): Promise<boolean> {
        return (await this.bedRepository.delete(id)).affected === 1 ? true : false;
    }
}

