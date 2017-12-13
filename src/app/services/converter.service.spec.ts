import { TestBed, inject } from '@angular/core/testing';

import { ConverterService } from './converter.service';
import {Exchange} from '../classes/exchange.enum';
import {Currency} from '../classes/currency.enum';
import {CryptowatchService} from './cryptowatch.service';
import {Cryptocurrency} from '../classes/cryptocurrency.enum';
import {Pair} from '../classes/pair';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConverterService, CryptowatchService]
    });
  });

  it('should be created', inject([ConverterService], (service: ConverterService) => {
    expect(service).toBeTruthy();
  }));

  it('price should be number', inject([ConverterService], (service: ConverterService) => {
    service.convert(new Pair(Cryptocurrency.BTC, Currency.EUR), Exchange.GDAX, 1.32).subscribe(price => {
      expect(price).toEqual(jasmine.any(Number));
      expect(price).toBeGreaterThan(0);
    });
  }));
});
