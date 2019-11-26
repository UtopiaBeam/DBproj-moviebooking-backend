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
        return this.manager.query(
            `SELECT * FROM review INNER JOIN movie ON movie.id=review.movieId WHERE id = ?`,
            [id],
        );
    }

    findByUserAndMovie(user: number, movie: string): Promise<Review> {
        return this.manager.query(
            `SELECT * FROM review INNER JOIN movie ON movie.id=review.movieId WHERE userId = ? AND name = ?`,
            [user, movie],
        );
    }

    findByUser(user: number) {
        return this.manager.query(
            `SELECT * FROM review INNER JOIN movie ON movie.id=review.movieId WHERE userId = ?`,
            [user],
        );
    }

    findByMovieName(movie: string) {
        return this.manager.query(
            `SELECT * FROM review INNER JOIN movie ON movie.id=review.movieId WHERE name = ?`,
            [movie],
        );
    }

    create(reviewDto: ReviewDto) {
        return this.manager.query(
            `INSERT INTO review (rating,comment,userId,movieId) VALUES (?,?,?,?)`,
            [
                reviewDto.rating,
                reviewDto.comment,
                reviewDto.userId,
                reviewDto.movieId,
            ],
        );
    }

    update(id: number, reviewDto: Partial<ReviewDto>) {
        return this.manager.query(
            `UPDATE review
            SET rating = ?, comment = ?
            WHERE id = ?`,
            [reviewDto.rating, reviewDto.comment, id],
        );
    }

    delete(id: number) {
        return this.manager.query(`DELETE FROM review WHERE id = ?`, [id]);
    }
}
