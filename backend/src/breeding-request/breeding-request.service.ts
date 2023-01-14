import { Injectable } from '@nestjs/common';
import { CreateBreedingRequestDto } from './dto/create-breeding-request.dto';
import { UpdateBreedingRequestDto } from './dto/update-breeding-request.dto';

@Injectable()
export class BreedingRequestService {
  create(createBreedingRequestDto: CreateBreedingRequestDto) {
    return 'This action adds a new breedingRequest';
  }

  findAll() {
    return `This action returns all breedingRequest`;
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
