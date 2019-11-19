import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get()
    findAll(): string {
        return this.movieService.findAll();
    }
}
