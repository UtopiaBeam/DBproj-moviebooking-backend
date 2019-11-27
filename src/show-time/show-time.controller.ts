import { Controller,Get,Post, Param,Body } from '@nestjs/common';
import { ShowtimeService } from './show-time.service';
import { ShowTime } from './show-time.entity';
import { ShowtimeDto } from './showtime.dto';

@Controller('showtime')
export class ShowtimeController {
    constructor(private readonly showtimeService: ShowtimeService) {}

    @Get()
    findAll(): Promise<ShowTime[]> {
        return this.showtimeService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<ShowTime> {
        return this.showtimeService.findById(id);
    }

    @Post()
    create(@Body() showtimeDto: ShowtimeDto) {
        return this.showtimeService.create(showtimeDto);
    }
}