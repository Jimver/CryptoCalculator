import { Injectable } from '@angular/core';
import {Pair} from '../classes/pair';
import {CryptowatchService} from './cryptowatch.service';
import {Exchange} from '../classes/exchange.enum';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConverterService {

  constructor(private cryptowatchService: CryptowatchService) { }

  convert(pair: Pair, exchange: Exchange, value: number, toFiat: boolean = true): Observable<number> {
    if (toFiat) {
      return this.cryptowatchService.getPrice(pair, exchange).map(result => result * value);
    } else {
      return this.cryptowatchService.getPrice(pair, exchange).map(result => value / result);
    }
  }

}
