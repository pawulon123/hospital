import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
export class StayDto {
    
    start: Date;
    
   
    end: Date;
    
    @IsOptional()
    @IsString()
    @MaxLength(500)
    epicrisis: string;
    
    @IsOptional()
    @MaxLength(20)
    @IsString()
    icd10: string;

    // status: Status;
}
