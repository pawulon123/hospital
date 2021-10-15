import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Parmas as QueryString } from './../shared/params';
import { JgpNfzService } from './jgp-nfz.service';
import { JgpNfzDto } from './jgp-nfz.dto';
import { JgpNfzEntity } from './jgp-nfz.entity';
@Controller('jgp-nfz')
export class JgpNfzController {
    constructor(private readonly jgpNfzService: JgpNfzService) { }
    @Get()
    all(): Promise<JgpNfzDto[]> {
        return this.jgpNfzService.index();
    }
    @Get(':id')
    one(@Param() params: QueryString): Promise<JgpNfzDto> {
        return this.jgpNfzService.findOne(params.id);
    }
    @Post()
    create(@Body() jgpNfz: JgpNfzDto): Promise<JgpNfzEntity> {
        return this.jgpNfzService.create(jgpNfz);
    }
    @Put(':id')
    update(@Param() params: QueryString , @Body() jgpNfz: JgpNfzDto): Promise<Boolean> {
        return this.jgpNfzService.update(params.id, jgpNfz);
    }
    @Delete(':id')
    destroy(@Param() params: QueryString): Promise<Boolean> {
        return this.jgpNfzService.destroy(params.id);
    }
}
