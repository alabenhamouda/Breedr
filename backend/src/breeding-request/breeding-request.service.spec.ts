import { Test, TestingModule } from '@nestjs/testing';
import { BreedingRequestService } from './breeding-request.service';

describe('BreedingRequestService', () => {
  let service: BreedingRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreedingRequestService],
    }).compile();

    service = module.get<BreedingRequestService>(BreedingRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
