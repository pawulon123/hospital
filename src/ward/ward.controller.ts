import { Parmas as QueryString } from './../shared/params';
import { Controller, Get, Param } from '@nestjs/common';
import { WardService } from './ward.service';

@Controller('ward')
export class WardController {
    constructor(private readonly wardService: WardService){}
    @Get()
    findAll(){
        return this.wardService.index();
    }
    @Get(':id')

    findOne(@Param() params: QueryString){
        return this.wardService.one(params.id);
    }
}
