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
    @ToInt()
    rating: number;

    @IsString()
    comment: string;

    @IsNumber()
    @ToInt()
    user: number;

    @IsNumber()
    @ToInt()
    movie: number;
}
