import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    synopsis: string;

    @Column({ type: 'float' })
    duration: number;

    @Column('simple-array')
    directors: string[];

    @Column('simple-array')
    actors: string[];
}
