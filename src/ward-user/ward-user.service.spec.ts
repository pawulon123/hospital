import { Test, TestingModule } from '@nestjs/testing';
import { WardUserService } from './ward-user.service';

describe('WardUserService', () => {
  let service: WardUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WardUserService],
    }).compile();

    service = module.get<WardUserService>(WardUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
