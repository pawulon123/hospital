import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import  {helmetCustomer as helmet}  from './cofig/HttpHeadersHelmet';

async function bootstrap() { console.log(helmet);

  const app = await NestFactory.create(AppModule);
  (app as NestExpressApplication).use(helmet());
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false,
    whitelist: true,
    forbidNonWhitelisted: true
  }));
  await app.listen(process.env.PORT);
}
bootstrap();
