import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Card } from '../card/card.entity';
import { Ticket } from '../ticket/ticket.entity';

export enum Gender {
    Male = 'male',
    Female = 'female',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: 'enum', enum: Gender, nullable: true })
    gender?: Gender;

    @Column()
    ssn: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column({ nullable: true })
    tel: string;

    @OneToMany(_ => Card, card => card.user)
    cards: Card[];

    @OneToMany(_ => Ticket, ticket => ticket.user)
    tickets: Ticket[];
}
