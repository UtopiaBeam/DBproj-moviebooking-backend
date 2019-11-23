import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Theatre } from './theatre.entity';

@Injectable()
export class TheatreService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<Theatre[]> {
        console.log('all theatres');
        return this.manager.query(`SELECT * FROM theatre`);
    }

    findOnebyid(id) : Promise<Theatre> {
        console.log('one theatre');
        return this.manager.query(`SELECT * FROM theatre WHERE id = ${id}`);
    }

    createTheatre(req,res) {
        res = this.manager.query(`INSERT INTO theatre (theatreNo,seats,cinema,showTimes) VALUES (${req.theatreNo},${req.seats},${req.cinema},${req.showTimes})`);
        return res.json();
    }

    updateTheatre(req,res) {
        res = this.manager.query(`UPDATE theatre SET theatreNo = ${req.theatreNo}, seats = ${req.seats}, cinema = ${req.cinema}, showTimes = ${req.showTimes}`);
        return res.json();
    }

    deleteTheatre(id): string {
        var res = this.manager.query(`DELETE FROM theatre WHERE id=${id}`);
        return `Theatre:${id} deleted`;
    }
}
