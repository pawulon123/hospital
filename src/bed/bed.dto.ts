import { IsInt, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';
export class BedDto {
    // id: number;
  
    @IsOptional()
    @IsInt()
    x_svg: number;
    
    @IsOptional()
    @IsInt()
    y_svg: number;
    
    @IsOptional()
    @IsInt()
    rotate: number;
    
    @IsOptional()
    @MaxLength(20)
    @IsString()
    type: string
}
