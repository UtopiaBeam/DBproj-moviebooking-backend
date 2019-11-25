import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TheatreService } from './theatre.service';
import { Theatre } from './theatre.entity';
import { TheatreDto } from './theatre.dto';
@Controller('theatre')
export class TheatreController {
    constructor(private readonly theatreService: TheatreService) {}

    @Get()
    findAll(): Promise<Theatre[]> {
        return this.theatreService.findAll();
    }

    @Get(':id')
    findById(@Param() params): Promise<Theatre> {
        return this.theatreService.findById(params.id);
    }

    @Post()
    createUser(@Body() theatreDto: TheatreDto) {
        return this.theatreService.create(theatreDto);
    }
}
