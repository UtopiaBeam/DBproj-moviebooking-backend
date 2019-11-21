import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { MovieService } from './movie/movie.service';
import { MovieController } from './movie/movie.controller';
import { MovieModule } from './movie/movie.module';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';
import { CompanyModule } from './company/company.module';
import { TheatreModule } from './theatre/theatre.module';
import { SeatModule } from './seat/seat.module';
import { CinemaModule } from './cinema/cinema.module';
import { GenreModule } from './genre/genre.module';
import { CardModule } from './card/card.module';
import { SouvenirModule } from './souvenir/souvenir.module';
import { ShowTimeModule } from './show-time/show-time.module';
import { TicketModule } from './ticket/ticket.module';
import { ReviewModule } from './review/review.module';
import { PointTransactionModule } from './point-transaction/point-transaction.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                type: 'mysql',
                host: config.mySqlUrl,
                port: 3306,
                username: config.mySqlUser,
                password: config.mySqlPassword,
                database: config.mySqlDatabase,
                entities: [__dirname + '/**/*.entity.{js,ts}'],
                synchronize: true,
            }),
        }),
        UserModule,
        MovieModule,
        ConfigModule,
        CompanyModule,
        TheatreModule,
        SeatModule,
        CinemaModule,
        GenreModule,
        CardModule,
        SouvenirModule,
        ShowTimeModule,
        TicketModule,
        ReviewModule,
        PointTransactionModule,
    ],
    controllers: [AppController, UserController, MovieController],
    providers: [AppService, UserService, MovieService],
})
export class AppModule {}
