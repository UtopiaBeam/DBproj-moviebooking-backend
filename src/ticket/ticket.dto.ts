import { IsNumber, IsEnum, IsOptional } from 'class-validator';
import { Status } from './ticket.entity';

export class TicketDto {
    @IsNumber()
    userId: number;

    @IsNumber()
    seatId: number;

    @IsNumber()
    showTimeId: number;

    @IsOptional()
    @IsEnum(Status)
    status?: Status;
}
