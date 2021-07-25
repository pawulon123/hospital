import { Test, TestingModule } from '@nestjs/testing';
import { JgpNfzController } from './jgp-nfz.controller';

describe('JgpNfzController', () => {
  let controller: JgpNfzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JgpNfzController],
    }).compile();

    controller = module.get<JgpNfzController>(JgpNfzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
