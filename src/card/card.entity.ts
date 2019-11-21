import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

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
}
