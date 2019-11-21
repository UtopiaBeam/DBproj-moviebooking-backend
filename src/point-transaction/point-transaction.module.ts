import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointTransaction } from './point-transaction.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PointTransaction])],
})
export class PointTransactionModule {}
