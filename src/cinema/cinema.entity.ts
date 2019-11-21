import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Theatre } from '../theatre/theatre.entity';

@Entity()
export class Cinema {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    tel: string;

    @OneToMany(_ => Theatre, theatre => theatre.cinema)
    theatres: Theatre[];
}
