import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Pair} from '../classes/pair';
import {Exchange} from '../classes/exchange.enum';
import 'rxjs/add/operator/map';

@Injectable()
export class CryptowatchService {
  // API URLs
  proxy = 'https://cors-proxy1.herokuapp.com/';
  endpoint = 'https://api.cryptowat.ch/';

  constructor(private http: HttpClient) { }

  // Latest price getter from gdax
  getPrice(pair: Pair, exchange: Exchange): Observable<number> {
    return this.http.get(this.proxy + this.endpoint + 'markets/' + exchange + '/' + pair.toString() + '/price').map(data => {
      return Number(data['result']['price']);
    });
  }

}
