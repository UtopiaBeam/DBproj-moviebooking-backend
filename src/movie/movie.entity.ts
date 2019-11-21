import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ManyToMany,
} from 'typeorm';
import { Company } from '../company/company.entity';
import { Genre } from '../genre/genre.entity';
import { ShowTime } from '../show-time/show-time.entity';

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    synopsis: string;

    @Column({ type: 'float' })
    duration: number;

    @Column('simple-array')
    directors: string[];

    @Column('simple-array')
    actors: string[];

    @ManyToOne(_ => Company, company => company.movies)
    company: Company;

    @ManyToMany(_ => Genre, genre => genre.movies)
    genres: Genre[];

    @ManyToMany(_ => ShowTime, showtime => showtime.movies)
    showtimes: ShowTime[];
}
