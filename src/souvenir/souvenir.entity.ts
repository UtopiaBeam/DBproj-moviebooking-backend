import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PointTransaction } from '../point-transaction/point-transaction.entity';

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

    @OneToMany(_ => PointTransaction, transaction => transaction.souvenir)
    transactions: PointTransaction[];
}
