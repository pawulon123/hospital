import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm';
import { WardUserEntity } from './ward-user.entity';
import { WardUserDto } from './ward-user.dto';

@Injectable()
export class WardUserService {
    constructor(
        @InjectRepository(WardUserEntity)
        private wardUserRepository: Repository<WardUserEntity>

    ) { }
    saveUserToWards(userId: number, wards: any[]): void {
        wards.forEach(ward => this.create({ userId, wardId: ward.id }));
    }
    updateUserToWards(userId: number, wards: any[]): void {
        this.destroyUser(userId);
        this.saveUserToWards(userId, wards);
    }
    async create(wardUser: WardUserDto): Promise<void> {
        await this.wardUserRepository.save(wardUser)
    }
    async destroyUser(userId: number): Promise<void> {
        await this.wardUserRepository.delete({ userId });
    }
}
