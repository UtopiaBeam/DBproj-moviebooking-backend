import { IsNotEmpty, IsString } from 'class-validator';

export class CinemaDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    tel: string;
}
