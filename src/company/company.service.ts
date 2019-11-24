import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Company } from './company.entity';
import { CompanyDto } from './company.dto';

@Injectable()
export class CompanyService {
    constructor(
        @InjectEntityManager() private readonly manager: EntityManager,
    ) {}

    findAll(): Promise<Company[]> {
        return this.manager.query(`SELECT * FROM movie`);
    }

    findById(name: string): Promise<Company> {
        return this.manager.query(`SELECT * FROM company WHERE name = ?`, [
            name,
        ]);
    }

    create(companyDto: CompanyDto) {
        return this.manager.query(
            `INSERT INTO company (name,establishedYear) VALUES (?,?)`,
            [companyDto.name, companyDto.establishedYear],
        );
    }
}
