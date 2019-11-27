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
    @ToInt()
    rating: number;

    @IsString()
    comment: string;

    @IsNumber()
    @ToInt()
    userId: number;

    @IsNumber()
    @ToInt()
    movieId: number;
}
