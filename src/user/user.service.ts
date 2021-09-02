import { HttpStatus } from '@nestjs/common';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) { }
    async index(): Promise<any[]> {
        return await this.userRepository.find();
    }
    async findOne(id: string): Promise<any> {
        return await this.userRepository.findOne(id);
    }
    async create(user: UserDto): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }
    async update(id: string, body: UserDto): Promise<boolean> {
        return (await this.userRepository.update(id, body)).affected === 1 ? true : false;
    }
    async destroy(id: string): Promise<boolean> {
        return (await this.userRepository.delete(id)).affected === 1 ? true : false;
    }
    private ifItDoesNotExistInRepository() {
        throw new HttpException('404 not found', HttpStatus.NOT_FOUND);
    }
}
