import { Parmas as QueryString } from './../shared/params';

import {Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BedService } from './bed.service';
import { BedDto } from './bed.dto';
import { BedEntity } from './bed.entity';
@Controller('bed')
export class BedController {
    constructor(private readonly bedService: BedService) { }
    @Get()
    all(): Promise<BedDto[]> {
        return this.bedService.index();
    }
    @Get(':id')
    one(@Param() params: QueryString): Promise<BedDto> {
        return this.bedService.findOne(params.id);
    }
    @Post()
    create(@Body() bed: BedDto): Promise<BedEntity> {
        return this.bedService.create(bed);
    }
    @Put(':id')
    update(@Param() params: QueryString , @Body() bed: BedDto): Promise<Boolean> {
        return this.bedService.update(params.id, bed);
    }
    @Delete(':id')
    destroy(@Param() params: QueryString): Promise<Boolean> {
        return this.bedService.destroy(params.id);
    }
}
