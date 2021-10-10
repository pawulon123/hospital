import { PatientDto } from './patient.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Parmas as QueryString } from './../shared/params';
@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) { }
    @Get()
    all(): Promise<PatientDto[]> {
        return this.patientService.index();
    }
    @Get(':id')
    one(@Param() params: QueryString): Promise<PatientDto> {
        return this.patientService.findOne(params.id);
    }
    @Post()
    create(@Body() patient: PatientDto): Promise<PatientDto> {
        return this.patientService.create(patient);
    }
    @Put(':id')
    update(@Param() params: QueryString , @Body() bed: PatientDto): Promise<Boolean> {
        return this.patientService.update(params.id, bed);
    }
    @Delete(':id')
    destroy(@Param() params: QueryString): Promise<Boolean> {
        return this.patientService.destroy(params.id);
    }
    
}
