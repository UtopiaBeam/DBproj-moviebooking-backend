import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { Cinema } from './cinema.entity';
import { CinemaDto } from './cinema.dto';

@Controller('cinema')
export class CinemaController {
    constructor(private readonly cinemaService: CinemaService) {}

    @Get()
    findAll(): Promise<Cinema[]> {
        return this.cinemaService.findAll();
    }

    @Get(':id')
    findById(@Param() params): Promise<Cinema> {
        return this.cinemaService.findById(params.id);
    }

    @Post()
    create(@Body() cinemaDto: CinemaDto) {
        return this.cinemaService.create(cinemaDto);
    }
}
