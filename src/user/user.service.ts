import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<User[]> {
        return this.manager.query(`SELECT * FROM user`);
    }

    findById(id: number): Promise<User> {
        return this.manager.query(`SELECT * FROM user WHERE id = ?`, [id]);
    }

    create(userDto: UserDto) {
        return this.manager.query(
            `INSERT INTO user (username,password,email,firstName,lastName,address,ssn,gender,tel) VALUES (?,?,?,?,?,?,?,?,?)`,
            [
                userDto.username,
                userDto.password,
                userDto.email,
                userDto.firstName,
                userDto.lastName,
                userDto.address,
                userDto.ssn,
                userDto.gender,
                userDto.tel,
            ],
        );
    }

    delete(id: number) {
        return this.manager.query(`DELETE FROM user WHERE id=?`, [id]);
    }
}
