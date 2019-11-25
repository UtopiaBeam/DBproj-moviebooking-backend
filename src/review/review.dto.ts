import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsOptional,
} from 'class-validator';
import { ToInt, ToFloat } from 'class-sanitizer';

export class ReviewDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @IsString()
    comment: string;

    @IsNumber()
    @IsNotEmpty()
    user: number;

    @IsNumber()
    @IsNotEmpty()
    movie: number;
}
