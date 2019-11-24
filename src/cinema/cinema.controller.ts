import { Controller, Get, Req, Res, Param,Post, Delete, Put } from '@nestjs/common';
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
    createCinema(@Req() req, @Res() res) {
        return this.cinemaService.createCinema(req,res);
    }

    @Put('update')
    updateCinema(@Req() req, @Res() res) {
        return this.cinemaService.updateCinema(req,res);
    }

    @Delete('delete/:id')
    deleteCinema(@Param() params) : string {
        return this.cinemaService.deleteCinema(params.id);
    }
}
