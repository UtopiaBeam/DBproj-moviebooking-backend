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
    ],
    controllers: [AppController, UserController, MovieController],
    providers: [AppService, UserService, MovieService],
})
export class AppModule {}
