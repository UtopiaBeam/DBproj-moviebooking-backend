import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowTime } from './show-time.entity';
import { ShowTimeController } from './show-time.controller';
import { ShowTimeService } from './show-time.service';

@Module({
    imports: [TypeOrmModule.forFeature([ShowTime])],
    controllers: [ShowTimeController],
    providers: [ShowTimeService],
})
export class ShowTimeModule {}
