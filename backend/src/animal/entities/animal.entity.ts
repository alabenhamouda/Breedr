import { BreedingRequest } from './../../breeding-request/entities/breeding-request.entity';
import { Timestamp } from './../../util/entities/timestamp.entity';
import { Gender } from './../../util/enums/gender.enum';
import { User } from './../../user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity('animals')
export class Animal extends Timestamp {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => User, (user) => user.animals)
  owner: User;

  @Column('uuid')
  ownerId: string;

  @Column()
  type: string;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender: string;

  @Column('int')
  age: number;

  @Column('simple-json')
  images: string[];

  @OneToMany(() => BreedingRequest, (request) => request.from)
  requestsFrom: BreedingRequest[];

  @OneToMany(() => BreedingRequest, (request) => request.to)
  requestsTo: BreedingRequest[];
}
