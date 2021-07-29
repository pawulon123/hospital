import { IsNumberString } from 'class-validator';
export class Parmas{
    @IsNumberString()
    id: string;
}