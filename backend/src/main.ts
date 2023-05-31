import { NestFactory } from '@nestjs/core';
import { DataSourceOptions } from 'typeorm';
import { createDatabase } from 'typeorm-extension';
import { AppModule } from './app.module';
import configuration from './config/configuration';
const path = require('path');
const fs = require('fs');

async function bootstrap() {
  //create database if it does not exist
  const { database, storageDirectory } = configuration();
  const options: DataSourceOptions = {
    type: database.type as 'mysql' | 'postgres',
    database: database.database,
    host: database.host,
    port: database.port,
    username: database.username,
    password: database.password,
  };

  await createDatabase({
    ifNotExist: true,
    options: options,
  });

  const imagesDirectory = path.join(storageDirectory, "images");
  if (!fs.existsSync(imagesDirectory)) {
    fs.mkdirSync(imagesDirectory, { recursive: true });
    console.log(`Directory created: ${imagesDirectory}`);
  } else {
    console.log(`Directory ${imagesDirectory} exists!`);
  }

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  /*app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      transform: true,
    }),
  );*/
  await app.listen(3000);
}
bootstrap();
