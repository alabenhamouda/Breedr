import { Animal } from './entities/animal.entity';
import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalsRepository: Repository<Animal>,
  ) {}

  create(createAnimalDto: CreateAnimalDto) {
    const animal = this.animalsRepository.create(createAnimalDto);
    animal.images = [];
    return this.animalsRepository.save(animal);
  }

  findAll(): Promise<Animal[]> {
    return this.animalsRepository.find();
  }

  findOne(id: string): Promise<Animal> {
    return this.animalsRepository.findOneBy({ id });
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  }
}
