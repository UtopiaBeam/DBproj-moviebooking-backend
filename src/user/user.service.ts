import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<User[]> {
        console.log('all users');
        return this.manager.query(`SELECT * FROM user`);
    }

    findOnebyid(id) : Promise<User> {
        console.log('one user');
        return this.manager.query(`SELECT * FROM user WHERE user_id = ${id}`);
    }

    createUser(req,res) {
        res = this.manager.query(`INSERT INTO user (username,password,email,firstName,lastName,Address,SSN,gender,tel) VALUES (${res.username},${res.password},${res.email},${res.firstName},${res.lastName},${res.Address},${res.SSN},${res.gender},${res.tel})`);
        return res.json();
    }

    updateUser(req,res) {
        res = this.manager.query(`UPDATE user SET username = ${res.username}, password = ${res.password}, email = ${res.email}, firstName = ${res.firstName}, lastName = ${res.lastName}, Address = ${res.Address}, SSN = ${res.SSN}, gender = ${res.gender}, tel = ${res.tel}`);
        return res.json();
    }

    deleteUser(id): string {
        var res = this.manager.query(`DELETE FROM user WHERE user_id=${id}`);
        return `User:${id} deleted`;
    }
}
