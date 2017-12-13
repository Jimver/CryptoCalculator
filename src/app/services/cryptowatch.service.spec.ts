import {TestBed, inject} from '@angular/core/testing';

import {CryptowatchService} from './cryptowatch.service';
import {Currency} from '../classes/currency.enum';
import {Pair} from '../classes/pair';
import {Exchange} from '../classes/exchange.enum';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Cryptocurrency} from '../classes/cryptocurrency.enum';

describe('CryptowatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CryptowatchService]
    });
  });

  it('should be created', inject([CryptowatchService], (service: CryptowatchService) => {
    expect(service).toBeTruthy();
  }));

  it('price should be number', inject([CryptowatchService], (service: CryptowatchService) => {
    service.getPrice(new Pair(Cryptocurrency.BTC, Currency.EUR), Exchange.GDAX).subscribe(price => {
      expect(price).toEqual(jasmine.any(Number));
      expect(price).toBeGreaterThan(0);
    });
  }));
});
