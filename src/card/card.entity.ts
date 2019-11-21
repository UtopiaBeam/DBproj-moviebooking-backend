import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { PointTransaction } from '../point-transaction/point-transaction.entity';

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    points: number;

    @Column()
    expDate: Date;

    @ManyToOne(_ => User, user => user.cards)
    user: User;

    @OneToMany(_ => PointTransaction, transaction => transaction.card)
    transactions: PointTransaction[];
}
