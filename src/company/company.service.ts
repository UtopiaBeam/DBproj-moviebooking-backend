import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<Company[]> {
        return this.manager.query(`SELECT * FROM movie`);
    }

    findOnebyid(name) : Promise<Company> {
        console.log('one company');
        return this.manager.query(`SELECT * FROM company WHERE name = ${name}`);
    }

    createCompany(req,res) {
        res = this.manager.query(`INSERT INTO company (name,establishedYear,movies) VALUES (${req.name},${req.establishedYear},${req.movies})`);
        return res.json();
    }

    updateCompany(req,res) {
        res = this.manager.query(`UPDATE company SET name = ${req.name}, establishedYear = ${req.establishedYear}, movies = ${req.movies} WHERE name = ${req.name}`);
        return res.json();
    }

    deleteCompany(name): string {
        var res = this.manager.query(`DELETE FROM company WHERE name = ${name}`);
        return `Company:${name} deleted`;
    }
}
