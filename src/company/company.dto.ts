import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CompanyDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsPositive()
    @IsNumber()
    establishedYear: number;
}
