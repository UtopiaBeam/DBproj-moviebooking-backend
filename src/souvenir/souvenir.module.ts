import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Souvenir } from './souvenir.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Souvenir])],
})
export class SouvenirModule {}
