import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theatre } from './theatre.entity';
import { TheatreController } from './theatre.controller';
import { TheatreService } from './theatre.service';

@Module({
    imports: [TypeOrmModule.forFeature([Theatre])],
    controllers: [TheatreController],
    providers: [TheatreService],
})
export class TheatreModule {}
