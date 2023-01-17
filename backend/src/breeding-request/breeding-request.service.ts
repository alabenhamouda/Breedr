import { Injectable } from '@nestjs/common';
import { CreateBreedingRequestDto } from './dto/create-breeding-request.dto';
import { UpdateBreedingRequestDto } from './dto/update-breeding-request.dto';
import {Repository} from "typeorm";
import {BreedingRequest} from "./entities/breeding-request.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class BreedingRequestService {
  constructor(
      @InjectRepository(BreedingRequest)
      private breedingRequestRepository: Repository<BreedingRequest>) {
  }

  create(createBreedingRequestDto: CreateBreedingRequestDto) {
    return 'This action adds a new breedingRequest';
  }

  findAll() :Promise<BreedingRequest[]>{
      return this.breedingRequestRepository.find({
        relations: {
          to: true,
          from: true,
        },
      });

  }

  findOne(id: number) {
    return `This action returns a #${id} breedingRequest`;
  }

  update(id: number, updateBreedingRequestDto: UpdateBreedingRequestDto) {
    return `This action updates a #${id} breedingRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} breedingRequest`;
  }
}
