import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SanitizationPipe } from './pipe/sanitization.pipe';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalPipes(
        new ValidationPipe({ transform: true }),
        new SanitizationPipe(),
    );
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
