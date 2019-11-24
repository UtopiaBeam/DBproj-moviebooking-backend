import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsOptional,
} from 'class-validator';

export class MovieDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    synopsis: string;

    @IsPositive()
    @IsNumber()
    duration: number;

    @IsNumber()
    companyId: number;

    @IsOptional()
    @IsNumber()
    genreId: number;
}
