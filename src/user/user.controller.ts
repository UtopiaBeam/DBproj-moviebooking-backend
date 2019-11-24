import { Controller, Get, Param, Post, Req, Res, Delete, Put} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOnebyid( @Param() params): Promise<User> {
        return this.userService.findOnebyid(params.id);
    }

    @Post('create')
    createUser(@Req() req, @Res() res) {
        return this.userService.createUser(req,res);
    }

    @Put('update')
    updateUser(@Req() req, @Res() res) {
        return this.userService.updateUser(req,res);
    }


    @Delete('delete/:id')
    deleteUser(@Param() params) : string {
        return this.userService.deleteUser(params.id);
    }
}
