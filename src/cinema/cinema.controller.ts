import { Controller, Get, Req, Res, Param,Post, Delete } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { Cinema } from './cinema.entity';

@Controller('cinema')
export class CinemaController {
    constructor(private readonly cinemaService: CinemaService) {}

    @Get()
    findAll(): Promise<Cinema[]> {
        return this.cinemaService.findAll();
    }

    @Get(':id')
    findOnebyid( @Param() params): Promise<Cinema> {
        return this.cinemaService.findOnebyid(params.id);
    }

    @Post('create')
    createcinema(@Req() req, @Res() res) {
        return this.cinemaService.createCinema(req,res);
    }


    @Delete('delete/:id')
    deletecinema(@Param() params) : string {
        return this.cinemaService.deleteCinema(params.id);
    }
}
