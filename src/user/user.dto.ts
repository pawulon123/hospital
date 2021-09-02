
import { IsEmail, IsNotEmpty, Length, MaxLength } from 'class-validator';
export class UserDto {

    @IsNotEmpty()
    @IsEmail()
    @MaxLength(254)
    mail: string;
    
    @IsNotEmpty()
    @Length(6, 50)
    password: string;
    
    // wards:any;
    }