import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { Movie } from '../movie/movie.entity';

@Entity()
export class Company {
    @PrimaryColumn()
    name: string;

    @Column()
    establishedYear: number;

    @OneToMany(_ => Movie, movie => movie.company)
    movies: Movie[];
}
