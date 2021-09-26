import { IsInt, IsNotEmpty, IsPositive } from "class-validator";


export class WardUserDto {

    @IsNotEmpty()
    @IsPositive()
    @IsInt()
    userId:number;
    
    @IsNotEmpty()
    @IsPositive()
    @IsInt()
    wardId:number;
}