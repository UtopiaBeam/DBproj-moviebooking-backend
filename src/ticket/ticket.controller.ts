import { Controller, Get, Param, Post, Req, Res, Delete,Put} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket } from './ticket.entity';

@Controller('ticket')
export class TicketController {
    constructor(private readonly ticketService: TicketService) {}

    @Get()
    findAll(): Promise<Ticket[]> {
        return this.ticketService.findAll();
    }

    @Get(':id')
    findOnebyid( @Param() params): Promise<Ticket> {
        return this.ticketService.findOnebyid(params.showTime_id,params.seat_id,params.user_id);
    }

    @Post('create')
    createTicket(@Req() req, @Res() res) {
        return this.ticketService.createTicket(req,res);
    }

    @Put('update')
    updateTicket(@Req() req, @Res() res) {
        return this.ticketService.updateTicket(req,res);
    }

    @Delete('delete/:id')
    deleteTicket(@Param() params) : string {
        return this.ticketService.deleteTicket(params.showTime_id,params.seat_id,params.user_id);
    }
}
