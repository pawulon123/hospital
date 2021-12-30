import {  IsOptional, IsString, MaxLength,Matches } from 'class-validator';
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

////////////////////////////////////////////////////
    // @IsString()
    // @IsNotEmpty()
    //  firstName: string;
  
    //  @IsEmail()
    //  emailAddress: string;
  
    //  @DoesMatch(o => o.emailAddress === o.emailAddressConfirm) // <---- check if email's match
    //  @IsEmail()
    //  emailAddressConfirm: string;
}
