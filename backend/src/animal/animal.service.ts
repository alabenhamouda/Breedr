import { AnimalImage } from './entities/animal-image.entity';
import { DataStorageService } from './../shared/data-storage/data-storage.service';
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
    private storageService: DataStorageService,
  ) {}

  private async convertImagesToBase64(animal: Animal): Promise<void> {
    if (!animal.images) {
      return;
    }
    const convertedImages: string[] = [];
    for (const image of animal.images) {
      if (image instanceof AnimalImage) {
        convertedImages.push(
          await this.storageService.getImageAsBase64(image.id, image.type),
        );
      } else if (typeof image === 'string') {
        convertedImages.push(image);
      }
    }
    animal.images = convertedImages;
  }

  create(createAnimalDto: CreateAnimalDto) {
    const animal = this.animalsRepository.create(createAnimalDto);
    animal.images = [];
    return this.animalsRepository.save(animal);
  }

  async findAll(shouldBringImages: boolean): Promise<Animal[]> {
    if (!shouldBringImages) {
      return this.animalsRepository.find();
    }
    const animals = await this.animalsRepository.find({
      relations: {
        images: true,
      },
    });
    for (const animal of animals) {
      await this.convertImagesToBase64(animal);
    }
    return animals;
  }

  async findOne(id: string): Promise<Animal> {
    const animal = await this.animalsRepository.findOne({
      where: { id },
      relations: {
        images: true,
      },
    });
    await this.convertImagesToBase64(animal);
    return animal;
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  }
}
