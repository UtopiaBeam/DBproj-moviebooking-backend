import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Movie } from '../movie/movie.entity';

@Entity()
export class ShowTime {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startTime: Date;

    @ManyToMany(_ => Movie, movie => movie.showtimes)
    movies: Movie[];
}
