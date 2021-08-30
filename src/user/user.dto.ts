
import { IsEmail, IsNotEmpty, IsInt, IsOptional, IsPositive, Length, MaxLength } from 'class-validator';
export class UserDto {

    @IsNotEmpty()
    @IsEmail()
    @MaxLength(254)
    mail: string;
    
    @IsNotEmpty()
    @Length(6, 60)
    password: string;

}