import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsOptional,
} from 'class-validator';
import { ToInt, ToFloat } from 'class-sanitizer';
import { Ticket } from 'src/ticket/ticket.entity';
import { Movie } from 'src/movie/movie.entity';
import { Theatre } from 'src/theatre/theatre.entity';

export class ShowtimeDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    startTime: number;

    movies: Movie[];

    tickets: Ticket[];
    theatres: Theatre[];
}
