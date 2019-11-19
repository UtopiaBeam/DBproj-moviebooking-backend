import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { MovieService } from './movie/movie.service';
import { MovieController } from './movie/movie.controller';
import { MovieModule } from './movie/movie.module';

@Module({
    imports: [UserModule, MovieModule],
    controllers: [AppController, UserController, MovieController],
    providers: [AppService, UserService, MovieService],
})
export class AppModule {}
