import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    ManyToMany,
} from 'typeorm';
import { Seat } from '../seat/seat.entity';
import { Cinema } from '../cinema/cinema.entity';
import { ShowTime } from '../show-time/show-time.entity';

@Entity()
export class Theatre {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    theatreNo: number;

    @OneToMany(_ => Seat, seat => seat.theatre)
    seats: Seat[];

    @ManyToOne(_ => Cinema, cinema => cinema.theatres)
    cinema: Cinema;

    @ManyToMany(_ => ShowTime, showTime => showTime.theatres)
    showTimes: ShowTime[];
}
