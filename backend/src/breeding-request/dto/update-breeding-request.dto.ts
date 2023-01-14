import { PartialType } from '@nestjs/mapped-types';
import { CreateBreedingRequestDto } from './create-breeding-request.dto';

export class UpdateBreedingRequestDto extends PartialType(CreateBreedingRequestDto) {}
