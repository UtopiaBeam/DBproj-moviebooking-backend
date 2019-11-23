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
        res = this.manager.query(`INSERT INTO movie (name,synopsis,director,actor,duration) VALUES (${res.name},${res.synopsis},${res.director},${res.actor},${res.duration})`);
        return res.json();
    }

    updateUser(req,res) {
        res = this.manager.query(`UPDATE movie SET name = ${res.name}, synopsis = ${res.synopsis}, director = ${res.director}, actor = ${res.actor}, duration = ${res.duration}`);
        return res.json();
    }

    deleteMovie(id): string {
        var res = this.manager.query(`DELETE FROM user WHERE movie_id=${id}`);
        return `Movie:${id} deleted`;
    }
}
