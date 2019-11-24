import { Injectable, Body } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Cinema } from './cinema.entity';
import { CinemaDto } from './cinema.dto';

@Injectable()
export class CinemaService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<Cinema[]> {
        return this.manager.query(`SELECT * FROM cinema`);
    }

    findById(id: number): Promise<Cinema> {
        return this.manager.query(`SELECT * FROM cinema WHERE id = ?`, [id]);
    }

    create(@Body() cinemaDto: CinemaDto) {
        return this.manager.query(
            `INSERT INTO cinema (name,address,tel) VALUES (?,?,?)`,
            [cinemaDto.name, cinemaDto.address, cinemaDto.tel],
        );
    }
}
