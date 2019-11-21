import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
} from 'typeorm';
import { Card } from '../card/card.entity';
import { Souvenir } from '../souvenir/souvenir.entity';

@Entity()
export class PointTransaction {
    @PrimaryGeneratedColumn('uuid')
    transactionNo: string;

    @Column()
    point: number;

    @Column({ nullable: true })
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(_ => Card, card => card.transactions, { nullable: false })
    card: Card;

    @ManyToOne(_ => Souvenir, souvenir => souvenir.transactions, {
        nullable: false,
    })
    souvenir: Souvenir;
}
