import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setUpSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('NestJs With Prisma')
    .setDescription('The NestJs With Prisma API description')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
