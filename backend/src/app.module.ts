import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AnimalModule } from './animal/animal.module';
import { BreedingRequestModule } from './breeding-request/breeding-request.module';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mongodb',// make global env
    url: 'mongodb+srv://Breedr:Breedr@breedr.zq4zqzg.mongodb.net/test',// make global env
    database: 'Breedr',
    entities: [
      __dirname + '/**/*.entity{.ts,.js}',
    ],
    ssl: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoLoadEntities: true,
    synchronize: true, // remove in prod
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [configuration],
    }),
    UserModule,
    AnimalModule,
    BreedingRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
