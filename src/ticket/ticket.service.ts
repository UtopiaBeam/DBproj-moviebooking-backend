import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Ticket, Status } from './ticket.entity';
import { TicketDto } from './ticket.dto';

@Injectable()
export class TicketService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<Ticket[]> {
        return this.manager.query(`SELECT * FROM ticket`);
    }

    findById(ref: string): Promise<Ticket> {
        return this.manager.query(`SELECT * FROM ticket WHERE ref = ?`, [ref]);
    }

    create(ticketDto: TicketDto) {
        return this.manager.query(
            `INSERT INTO ticket (showTimeId,seatId,userId) VALUES (?,?,?)`,
            [ticketDto.showTimeId, ticketDto.seatId, ticketDto.userId],
        );
    }

    changeStatus(ref: string, status: Status) {
        return this.manager.query(
            `UPDATE ticket SET status = ? WHERE ref = ?`,
            [status, ref],
        );
    }
}
