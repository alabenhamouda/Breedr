import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BreedingRequestService } from './breeding-request.service';
import { CreateBreedingRequestDto } from './dto/create-breeding-request.dto';
import { UpdateBreedingRequestDto } from './dto/update-breeding-request.dto';

@Controller('breeding-request')
export class BreedingRequestController {
  constructor(private readonly breedingRequestService: BreedingRequestService) {}

  @Post()
  create(@Body() createBreedingRequestDto: CreateBreedingRequestDto) {
    return this.breedingRequestService.create(createBreedingRequestDto);
  }

  @Get()
  findAll() {
    return this.breedingRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.breedingRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBreedingRequestDto: UpdateBreedingRequestDto) {
    return this.breedingRequestService.update(+id, updateBreedingRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.breedingRequestService.remove(+id);
  }
}
