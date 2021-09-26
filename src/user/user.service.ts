import { HttpStatus } from '@nestjs/common';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WardUserService } from 'src/ward-user/ward-user.service';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private wardUserService: WardUserService
    ) { }
    async index(): Promise<any[]> {
        return await this.userRepository.find();
    }
    async findOne(id: string): Promise<any> {
        return await this.userRepository.findOne(id);
    }
    async create(user: UserDto): Promise<UserEntity> {
        return await this.userRepository.save(user).then((user) => {
            this.wardUserService.saveUserToWards(user.id, user.wards);
            return user;
        });
    }
    async update(id: number, body: UserDto): Promise<any> {
        let { wards, ...user } = body;
        return (await this.userRepository.update(id, user)).affected === 1 ?
            this.wardUserService.updateUserToWards(id, wards) : false;
    }
    async destroy(id: number): Promise<boolean> {
        return (await this.userRepository.delete(id)).affected === 1 ? true : false;
    }
    private ifItDoesNotExistInRepository() {
        throw new HttpException('404 not found', HttpStatus.NOT_FOUND);
    }
}
