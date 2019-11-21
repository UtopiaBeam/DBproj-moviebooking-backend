import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    private get(key: string): string {
        const env = process.env[key];
        if (env) {
            return env;
        }
        throw new Error(`'${key}' is not defined.`);
    }

    get mySqlUrl(): string {
        return this.get('MYSQL_URL');
    }

    get mySqlDatabase(): string {
        return this.get('MYSQL_DATABASE');
    }

    get mySqlUser(): string {
        return this.get('MYSQL_USER');
    }

    get mySqlPassword(): string {
        return this.get('MYSQL_PASSWORD');
    }
}
