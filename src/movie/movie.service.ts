import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<Movie[]> {
        return this.manager.query(`SELECT * FROM movie`);
    }

    findOnebyid(id) : Promise<Movie> {
        console.log('one user');
        return this.manager.query(`SELECT * FROM movie WHERE movie_id = ${id}`);
    }

    createMovie(req,res) {
        res = this.manager.query(`INSERT INTO movie (name,synopsis,director,actor,duration) VALUES (${req.name},${req.synopsis},${req.director},${req.actor},${req.duration})`);
        return res.json();
    }

    updateUser(req,res) {
        res = this.manager.query(`UPDATE movie SET name = ${req.name}, synopsis = ${req.synopsis}, director = ${req.director}, actor = ${req.actor}, duration = ${req.duration}`);
        return res.json();
    }

    deleteMovie(id): string {
        var res = this.manager.query(`DELETE FROM user WHERE movie_id=${id}`);
        return `Movie:${id} deleted`;
    }
}
