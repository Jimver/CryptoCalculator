import { TestBed, inject } from '@angular/core/testing';

import { KrakenService } from './kraken.service';
import {Pair} from '../classes/pair';
import {Currency} from '../classes/currency.enum';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('KrakenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [KrakenService]
    });
  });

  it('should be created', inject([KrakenService], (service: KrakenService) => {
    expect(service).toBeTruthy();
  }));

  it('kraken price should be number', inject([KrakenService], (service: KrakenService) => {
    service.getLatestPrice(new Pair(Currency.XBT, Currency.EUR)).subscribe(price => {
      expect(price).toEqual(jasmine.any(Number));
      expect(price).toBeGreaterThan(0);
    });
  }));
});
