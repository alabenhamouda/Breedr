import { Animal } from './../../animal/entities/animal.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('breeding_requests')
export class BreedingRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Animal, (animal) => animal.requestsFrom)
  from: Animal;

  @ManyToOne(() => Animal, (animal) => animal.requestsTo)
  to: Animal;
}
