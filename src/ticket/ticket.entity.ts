import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

export enum Status {
    Available = 'available',
    Booked = 'booked',
}

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: Status, default: Status.Available })
    status: Status;

    @ManyToOne(_ => User, user => user.tickets)
    user: User;
}
