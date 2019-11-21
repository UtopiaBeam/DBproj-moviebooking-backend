import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Theatre } from '../theatre/theatre.entity';

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
}
