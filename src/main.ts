import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setUpSwagger } from './lib/constants/swagger.config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  setUpSwagger(app);
  await app.listen(process.env.PORT ?? 3000);
  console.log(await app.getUrl());
}
bootstrap();
