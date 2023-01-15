import { Animal } from './../../animal/entities/animal.entity';
import { Entity, ManyToOne, ObjectIdColumn } from 'typeorm';

@Entity('breeding_requests')
export class BreedingRequest {
  @ObjectIdColumn()
  id: string;

  @ManyToOne(() => Animal, (animal) => animal.requestsFrom)
  from: Animal;

  @ManyToOne(() => Animal, (animal) => animal.requestsTo)
  to: Animal;
}
