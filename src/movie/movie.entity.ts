import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ManyToMany,
    OneToMany,
} from 'typeorm';
import { Company } from '../company/company.entity';
import { Genre } from '../genre/genre.entity';
import { ShowTime } from '../show-time/show-time.entity';
import { Review } from '../review/review.entity';

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

    @ManyToOne(_ => Company, company => company.movies)
    company: Company;

    @ManyToMany(_ => Genre, genre => genre.movies)
    genres: Genre[];

    @ManyToMany(_ => ShowTime, showTime => showTime.movies)
    showTimes: ShowTime[];

    @OneToMany(_ => Review, review => review.movie)
    reviews: Review[];
}
