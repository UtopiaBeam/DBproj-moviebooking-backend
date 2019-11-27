import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { ShowTime } from './show-time.entity';
import { ShowtimeDto } from './show-time.dto';

@Injectable()
export class ShowtimeService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<ShowTime[]> {
        return this.manager.query(`SELECT * FROM showtime`);
    }

    findById(id: number): Promise<ShowTime> {
        return this.manager.query(`SELECT * FROM showtime WHERE id = ?`, [id]);
    }

    create(showtimeDto: ShowtimeDto) {
        return this.manager.query(
            `INSERT INTO showtime (id,startTime,movies,theatres,tickets) VALUES (?,?,?,?,?)`,
            [
                showtimeDto.id,
                showtimeDto.startTime,
                showtimeDto.movies,
                showtimeDto.theatres,
                showtimeDto.tickets,
            ],
        );
    }
}
