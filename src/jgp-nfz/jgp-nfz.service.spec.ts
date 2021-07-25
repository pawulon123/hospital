import { Test, TestingModule } from '@nestjs/testing';
import { JgpNfzService } from './jgp-nfz.service';

describe('JgpNfzService', () => {
  let service: JgpNfzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JgpNfzService],
    }).compile();

    service = module.get<JgpNfzService>(JgpNfzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
