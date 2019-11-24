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
        return this.manager.query(`SELECT * FROM movie WHERE id = ${id}`);
    }

    findOnebyname(name) : Promise<Movie> {
        console.log('one user');
        return this.manager.query(`SELECT * FROM movie WHERE name = ${name}`);
    }

    createMovie(req,res) {
        res = this.manager.query(`INSERT INTO movie (name,synopsis,directors,actors,duration,company,genres,showTimes,reviews) VALUES (${req.name},${req.synopsis},${req.director},${req.actor},${req.duration},${req.company},${req.genres},${req.showTimes},${req.reviews})`);
        return res.json();
    }

    updateMovie(req,res) {
        res = this.manager.query(`UPDATE movie SET name = ${req.name}, synopsis = ${req.synopsis}, directors = ${req.director}, actors = ${req.actor}, duration = ${req.duration},company = ${req.company}, genres = ${req.genres}, showTimes = ${req.showTimes}, reviews = ${req.reviews} WHERE id = ${req.id}`);
        return res.json();
    }

    deleteMovie(id): string {
        var res = this.manager.query(`DELETE FROM user WHERE id = ${id}`);
        return `Movie:${id} deleted`;
    }
}
