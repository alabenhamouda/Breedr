import { NestFactory } from '@nestjs/core';
import { DataSourceOptions } from 'typeorm';
import { createDatabase } from 'typeorm-extension';
import { AppModule } from './app.module';
import configuration from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
