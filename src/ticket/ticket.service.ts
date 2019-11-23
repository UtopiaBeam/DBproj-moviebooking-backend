import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Ticket } from './ticket.entity';

@Injectable()
export class TicketService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<Ticket[]> {
        console.log('all tickets');
        return this.manager.query(`SELECT * FROM ticket`);
    }

    findOnebyid(showTime_id,seat_id,user_id) : Promise<Ticket> {
        console.log('one ticket');
        return this.manager.query(`SELECT * FROM ticket WHERE showTime_id = ${showTime_id} AND seat_id = ${seat_id} AND user_id = ${user_id}`);
    }

    createTicket(req,res) {
        res = this.manager.query(`INSERT INTO ticket (showTime_id,seat_id,user_id,ticket_ref) VALUES (${req.showTime_id},${req.seat_id},${req.user_id},${req.ticket_ref})`);
        return res.json();
    }

    updateTicket(req,res) {
        res = this.manager.query(`UPDATE ticket SET user_id = ${req.user_id}, showTime_id = ${req.showTime_id}, seat_id = ${req.seat_id}, ticket_ref = ${req.ticket_ref}`);
        return res.json();
    }
    
    deleteTicket(showTime_id,seat_id,user_id): string {
        var res = this.manager.query(`DELETE FROM ticket WHERE showTime_id = ${showTime_id} AND seat_id = ${seat_id} AND user_id = ${user_id}`);
        return `Ticket deleted`;
    }
}
