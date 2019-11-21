import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToOne,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Seat } from '../seat/seat.entity';
import { ShowTime } from '../show-time/show-time.entity';

export enum Status {
    Available = 'available',
    Booked = 'booked',
}

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn('uuid')
    ref: string;

    @Column({ type: 'enum', enum: Status, default: Status.Available })
    status: Status;

    @ManyToOne(_ => User, user => user.tickets)
    user: User;

    @ManyToOne(_ => Seat, seat => seat.tickets, { nullable: false })
    seat: Seat;

    @ManyToOne(_ => ShowTime, showTime => showTime.tickets)
    showTime: ShowTime;
}
