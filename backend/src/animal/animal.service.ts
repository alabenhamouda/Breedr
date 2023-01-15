import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}
  create(createAnimalDto: CreateAnimalDto) {
    const animal = this.animalRepository.create(createAnimalDto);
    animal.images = [];
    return this.animalRepository.save(animal);
  }

  findAll() {
    return this.animalRepository.find();
    return `This action returns all animal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animal`;
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  }

  getAnimalsByFilter(filter) {
    return this.animalRepository.findAndCount(
      filter as FindManyOptions<Animal>,
    );
  }
}
