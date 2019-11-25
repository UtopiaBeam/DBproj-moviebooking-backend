import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Theatre } from './theatre.entity';
import { TheatreDto } from './theatre.dto';

@Injectable()
export class TheatreService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<Theatre[]> {
        return this.manager.query(`SELECT * FROM theatre`);
    }

    findById(id: number): Promise<Theatre> {
        return this.manager.query(`SELECT * FROM theatre WHERE id = ?`, [id]);
    }

    create(theatreDto: TheatreDto) {
        return this.manager.query(
            `INSERT INTO theatre (theatreNo,cinemaId) VALUES (?,?)`,
            [theatreDto.theatreNo, theatreDto.cinemaId],
        );
    }
}
