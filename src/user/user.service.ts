import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findAll(): string {
        return 'All users data';
    }
}