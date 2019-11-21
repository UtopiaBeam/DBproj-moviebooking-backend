import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    OneToMany,
} from 'typeorm';
import { Movie } from '../movie/movie.entity';
import { Theatre } from '../theatre/theatre.entity';
import { Ticket } from '../ticket/ticket.entity';

@Entity()
export class ShowTime {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startTime: Date;

    @ManyToMany(_ => Movie, movie => movie.showTimes)
    movies: Movie[];

    @ManyToMany(_ => Theatre, theatre => theatre.showTimes)
    theatres: Theatre[];

    @OneToMany(_ => Ticket, ticket => ticket.showTime)
    tickets: Ticket[];
}
