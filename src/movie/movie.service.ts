import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Movie } from './movie.entity';
import { MovieDto } from './movie.dto';

@Injectable()
export class MovieService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<Movie[]> {
        return this.manager.query(`SELECT * FROM movie`);
    }

    findById(id: number): Promise<Movie> {
        return this.manager.query(`SELECT * FROM movie WHERE id = ?`, [id]);
    }

    create(movieDto: MovieDto) {
        return this.manager.query(
            `INSERT INTO movie (name,synopsis,duration,companyName) VALUES (?,?,?,?)`,
            [
                movieDto.name,
                movieDto.synopsis,
                movieDto.duration,
                movieDto.companyName,
            ],
        );
    }
}
