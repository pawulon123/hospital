import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
     }
    @Get()
    all(): Promise<UserDto[]> {
        return this.userService.index();
    }
    @Get(':id')
    one(@Param() params): Promise<UserDto> {
        return this.userService.findOne(params.id);
    }
    @Post()
    create(@Body() user: UserDto): Promise<UserEntity> {
        return this.userService.create(user);
    }
    @Put(':id')
    update(@Param() params , @Body() user: UserDto): Promise<Boolean> {
        return this.userService.update(params.id, user);
    }
    @Delete(':id')
    destroy(@Param() params): Promise<Boolean> {
        return this.userService.destroy(params.id);
    }
}
