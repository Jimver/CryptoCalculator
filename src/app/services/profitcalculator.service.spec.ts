import { TestBed, inject } from '@angular/core/testing';

import { ProfitcalculatorService } from './profitcalculator.service';

describe('ProfitcalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfitcalculatorService]
    });
  });

  it('should be created', inject([ProfitcalculatorService], (service: ProfitcalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('no quick sell', inject([ProfitcalculatorService], () => {
    expect(ProfitcalculatorService.calculateProfitFromRange(100, false, 0.0016, 0.0026, 5000, 6000)).toBeCloseTo(19.6163, 1);
  }));

  it('quick sell', inject([ProfitcalculatorService], () => {
    expect(ProfitcalculatorService.calculateProfitFromRange(100, true, 0.0016, 0.0026, 5000, 6000)).toBeCloseTo(19.4964992, 1);
  }));
});
