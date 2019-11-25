import {
    Controller,
    Get,
    Req,
    Res,
    Param,
    Post,
    Delete,
    Put,
    Body,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';
import { MovieDto } from './movie.dto';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get()
    findAll(): Promise<Movie[]> {
        return this.movieService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Movie> {
        return this.movieService.findById(id);
    }

    @Post()
    create(@Body() movieDto: MovieDto) {
        return this.movieService.create(movieDto);
    }
}
