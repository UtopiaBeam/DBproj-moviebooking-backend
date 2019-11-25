import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsOptional,
} from 'class-validator';
import { ToInt, ToFloat } from 'class-sanitizer';

export class MovieDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    synopsis: string;

    @IsPositive()
    @IsNumber()
    @ToFloat()
    duration: number;

    @IsNumber()
    @ToInt()
    companyId: number;

    @IsOptional()
    @IsNumber()
    genreId: number;
}
