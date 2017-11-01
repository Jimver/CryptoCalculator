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
});
