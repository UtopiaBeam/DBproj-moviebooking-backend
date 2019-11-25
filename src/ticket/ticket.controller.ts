import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket, Status } from './ticket.entity';
import { TicketDto } from './ticket.dto';

@Controller('ticket')
export class TicketController {
    constructor(private readonly ticketService: TicketService) {}

    @Get()
    findAll(): Promise<Ticket[]> {
        return this.ticketService.findAll();
    }

    @Get(':id')
    findById(@Param('ref') ref: string): Promise<Ticket> {
        return this.ticketService.findById(ref);
    }

    @Post()
    create(@Body() ticketDto: TicketDto) {
        return this.ticketService.create(ticketDto);
    }

    @Put(':ref')
    update(@Param('ref') ref: string, @Body('status') status: Status) {
        return this.ticketService.changeStatus(ref, status);
    }
}
