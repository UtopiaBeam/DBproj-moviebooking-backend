import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { Theatre } from '../theatre/theatre.entity';
import { Ticket } from '../ticket/ticket.entity';

@Entity()
export class Seat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    seatNo: string;

    @Column()
    price: number;

    @ManyToOne(_ => Theatre, theatre => theatre.seats)
    theatre: Theatre;

    @OneToMany(_ => Ticket, ticket => ticket.seat)
    tickets: Ticket[];
}
