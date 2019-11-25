import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Body,
    Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<User> {
        return this.userService.findById(id);
    }

    @Post()
    create(@Body() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.userService.delete(id);
    }
}
