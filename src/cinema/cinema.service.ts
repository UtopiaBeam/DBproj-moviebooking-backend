import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Cinema } from './cinema.entity';

@Injectable()
export class CinemaService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<Cinema[]> {
        console.log('all cinemas');
        return this.manager.query(`SELECT * FROM cinema`);
    }

    findOnebyid(id) : Promise<Cinema> {
        console.log('one cinema');
        return this.manager.query(`SELECT * FROM cinema WHERE id = ${id}`);
    }

    createCinema(req,res) {
        res = this.manager.query(`INSERT INTO cinema (name,address,tel,theatres) VALUES (${req.name},${req.address},${req.tel},${req.theatres})`);
        return res.json();
    }

    updateCinema(req,res) {
        res = this.manager.query(`UPDATE cinema SET name = ${req.name}, address = ${req.address}, tel = ${req.tel}, theatres = ${req.theatres} WHERE id = ${req.id}`);
        return res.json();
    }
    
    deleteCinema(id): string {
        var res = this.manager.query(`DELETE FROM cinema WHERE id = ${id}`);
        return `Cinema deleted`;
    }
}