import { BreedingRequest } from './entities/breeding-request.entity';
import { Animal } from './../animal/entities/animal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BreedingRequestService } from './breeding-request.service';
import { BreedingRequestController } from './breeding-request.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BreedingRequest])],
  controllers: [BreedingRequestController],
  providers: [BreedingRequestService],
})
export class BreedingRequestModule {}
