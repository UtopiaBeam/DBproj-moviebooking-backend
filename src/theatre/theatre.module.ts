import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theatre } from './theatre.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Theatre])],
})
export class TheatreModule {}
