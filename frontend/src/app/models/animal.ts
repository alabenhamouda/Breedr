import { AnimalImage } from './animal-image';
import { Gender } from './../Enums/genderEnum';
export class Animal {
  id: string | null = null;
  ownerId: string | null = null;
  type: string | null = null;
  gender: Gender | null = null;
  age: number = 0;
  images: (AnimalImage | string)[] = [];
}
