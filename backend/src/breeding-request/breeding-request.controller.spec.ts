import { Test, TestingModule } from '@nestjs/testing';
import { BreedingRequestController } from './breeding-request.controller';
import { BreedingRequestService } from './breeding-request.service';

describe('BreedingRequestController', () => {
  let controller: BreedingRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BreedingRequestController],
      providers: [BreedingRequestService],
    }).compile();

    controller = module.get<BreedingRequestController>(BreedingRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
