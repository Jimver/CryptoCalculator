import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Pair} from '../classes/pair';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class KrakenService {
  // API URLs
  proxy = 'https://cors-proxy1.herokuapp.com/';
  endpoint = 'https://api.kraken.com/0/';
  cryptowatch = 'https://api.cryptowat.ch/';

  constructor(private http: HttpClient) { }

  // Latest price getter from kraken
  getLatestPrice(pair: Pair): Observable<number> {
    return this.http.get(this.proxy + this.endpoint + 'public/Trades', {
      params: new HttpParams().set('pair', pair.toString()),
    }).map( data => {
      // TODO get median mean instead of latest to prevent peaks
      return Number(data['result']['XXBTZEUR'][999][0]);
    });
  }

  // Latest price getter from gdax
  getCryptoPrice(): Observable<number> {
    return this.http.get(this.proxy + this.cryptowatch + 'markets/gdax/btcusd/price').map(data => {
      return Number(data['result']['price']);
    });
  }
}
