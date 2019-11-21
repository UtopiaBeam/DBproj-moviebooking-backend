import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowTime } from './show-time.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ShowTime])],
})
export class ShowTimeModule {}
