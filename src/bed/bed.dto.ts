import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
export class BedDto {
    // id: number;
  
    @IsOptional()
    @IsInt()
    x_svg: number;
 
    @IsOptional()
    @IsInt()
    room: any;
    
    @IsOptional()
    @IsInt()
    y_svg: number;
    
    @IsOptional()
    @IsInt()
    rotate: number;
 
    @IsOptional()
    polygon: string;
    
    @IsOptional()
    @MaxLength(20)
    @IsString()
    type: string
}
