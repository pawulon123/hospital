import { IsInt, IsNotEmpty, IsPositive } from "class-validator";

export class UserWardsDto {
    @IsNotEmpty()
    @IsPositive()
    @IsInt()
    id: number;


}