import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
    findAll(): string {
        return 'All movies data';
    }
}
