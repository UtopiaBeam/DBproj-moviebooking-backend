import { IsNumber, IsPositive } from 'class-validator';

export class TheatreDto {
    @IsPositive()
    @IsNumber()
    theatreNo: number;

    @IsPositive()
    @IsNumber()
    cinemaId: number;
}
