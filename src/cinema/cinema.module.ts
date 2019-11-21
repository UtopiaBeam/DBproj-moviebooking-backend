import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cinema } from './cinema.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cinema])],
})
export class CinemaModule {}
