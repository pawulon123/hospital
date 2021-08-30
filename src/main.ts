import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  (app as NestExpressApplication).use(helmet());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: true,
    whitelist: true,
    forbidNonWhitelisted: true
  }));
  await app.listen(process.env.PORT);
}
bootstrap();
