import { Test, TestingModule } from '@nestjs/testing';
import { TomanPayService } from './toman-pay.service';

describe('NodeTomanPayService', () => {
  let service: TomanPayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TomanPayService],
    }).compile();

    service = module.get<TomanPayService>(TomanPayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
