import { UserWardsDto } from './user-wards.dto';
import { ArrayUnique, IsArray, IsEmail, IsNotEmpty, Length, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer';
export class UserDto {

    @IsNotEmpty()
    @IsEmail()
    @MaxLength(254)
    mail: string;
    
    @IsNotEmpty()
    @Length(6, 50)
    password: string;
    
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UserWardsDto)
    @ArrayUnique(UserWardsDto => UserWardsDto.id)
    wards: UserWardsDto[];
    }