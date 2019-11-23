import { Controller, Get, Req, Res, Param,Post, Delete } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get()
    findAll(): Promise<Movie[]> {
        return this.movieService.findAll();
    }

    @Get(':id')
    findOnebyid( @Param() params): Promise<Movie> {
        return this.movieService.findOnebyid(params.id);
    }

    @Post('create')
    createMovie(@Req() req, @Res() res) {
        return this.movieService.createMovie(req,res);
    }

    @Delete('delete/:id')
    deleteMovie(@Param() params) : string {
        return this.movieService.deleteMovie(params.id);
    }
}
