import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Movie } from '../movie/movie.entity';

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column('text', { nullable: true })
    comment: string;

    @ManyToOne(_ => User, user => user.reviews)
    user: User;

    @ManyToOne(_ => Movie, movie => movie.reviews)
    movie: Movie;
}
