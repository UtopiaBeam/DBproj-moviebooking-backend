import { IsString, IsNotEmpty, IsEnum, IsOptional, IsEmail } from 'class-validator';
import { Gender } from './user.entity';

export class UserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsEnum(Gender)
    gender?: Gender;

    @IsNotEmpty()
    @IsString()
    ssn: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsOptional()
    @IsString()
    tel?: string;
}
