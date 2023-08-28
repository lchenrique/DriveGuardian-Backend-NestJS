import { Test, TestingModule } from '@nestjs/testing';
import { RoutesroutesDriverService } from './routesroutes-driver.service';

describe('RoutesroutesDriverService', () => {
  let service: RoutesroutesDriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoutesroutesDriverService],
    }).compile();

    service = module.get<RoutesroutesDriverService>(RoutesroutesDriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
