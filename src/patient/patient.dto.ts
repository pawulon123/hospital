import { IsBoolean, IsEnum, IsOptional, IsString, Length, MaxLength} from "class-validator";
import { Gender} from './sex'
export class PatientDto {

    @IsOptional()
    @MaxLength(100)
    @IsString()
    name: string;

    @IsOptional()
    @MaxLength(100)
    @IsString()
    sureName: string;

    @IsOptional()
    @Length(11,11)
    pesel: string;

    @IsOptional()
    @MaxLength(500)
    @IsString()
    description: string;
    
    @IsEnum(Gender)
    sex: Gender;

    @IsBoolean()
    walking: boolean;
}
