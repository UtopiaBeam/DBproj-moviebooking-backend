import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Review } from './review.entity';
import { ReviewDto } from './review.dto';

@Injectable()
export class ReviewService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<Review[]> {
        return this.manager.query(`SELECT * FROM review`);
    }

    findById(id: number): Promise<Review> {
        return this.manager.query(`SELECT * FROM review WHERE id = ?`, [id]);
    }

    findByUserAndMovie(user: number,movie: string): Promise<Review> {
        return this.manager.query(`SELECT * FROM review INNER JOIN movie ON movie.id=review.movieId WHERE userId = ? AND name = ?`,[user,movie]);
    }

    create(reviewDto: ReviewDto) {
        return this.manager.query(
            `INSERT INTO review (id,rating,comment,user,movie) VALUES (?,?,?,?,?)`,
            [
                reviewDto.id,
                reviewDto.rating,
                reviewDto.comment,
                reviewDto.user,
                reviewDto.movie,
            ],
        );
    }
}
