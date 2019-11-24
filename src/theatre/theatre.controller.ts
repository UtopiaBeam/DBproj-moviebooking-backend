import { Controller, Get, Param, Post, Req, Res, Delete,Put } from '@nestjs/common';
import { TheatreService } from './theatre.service';
import { Theatre } from './theatre.entity';
@Controller('theatre')
export class TheatreController {
    constructor(private readonly theatreService: TheatreService) {}

    @Get()
    findAll(): Promise<Theatre[]> {
        return this.theatreService.findAll();
    }

    @Get(':id')
    findOnebyid( @Param() params): Promise<Theatre> {
        return this.theatreService.findOnebyid(params.id);
    }

    @Post('create')
    createUser(@Req() req, @Res() res) {
        return this.theatreService.createTheatre(req,res);
    }

    @Put('update')
    updateTheatre(@Req() req, @Res() res) {
        return this.theatreService.updateTheatre(req,res);
    }


    @Delete('delete/:id')
    deleteUser(@Param() params) : string {
        return this.theatreService.deleteTheatre(params.id);
    }
}
