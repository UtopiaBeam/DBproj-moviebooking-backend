import { Injectable, NestMiddleware } from '@nestjs/common';
import { sanitize } from 'class-sanitizer';
import { Request, Response } from 'express';

@Injectable()
export class SanitizationMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        sanitize(req.params);
        sanitize(req.body);
        sanitize(req.query);
        next();
    }
}
