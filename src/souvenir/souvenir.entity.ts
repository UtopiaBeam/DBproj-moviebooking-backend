import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Souvenir {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    amount: number;
}
