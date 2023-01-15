import { Animal } from './../../animal/entities/animal.entity';
import { Timestamp } from './../../util/entities/timestamp.entity';
import { Column, Entity, ObjectIdColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User extends Timestamp {
  @ObjectIdColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  fullname: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @OneToMany((type) => Animal, (animal) => animal.owner)
  animals: Animal[];
}
