import { Entity, PrimaryColumn, ManyToMany } from 'typeorm';
import { Movie } from '../movie/movie.entity';

@Entity()
export class Genre {
    @PrimaryColumn()
    name: string;

    @ManyToMany(_ => Movie, movie => movie.genres)
    movies: Movie[];
}
