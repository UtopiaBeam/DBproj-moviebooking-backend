import { IsNumber, IsPositive } from 'class-validator';
import { ToInt } from 'class-sanitizer';

export class TheatreDto {
    @IsPositive()
    @IsNumber()
    @ToInt()
    theatreNo: number;

    @IsPositive()
    @IsNumber()
    @ToInt()
    cinemaId: number;
}
