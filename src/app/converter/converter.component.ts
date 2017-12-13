import { Component, OnInit } from '@angular/core';
import {Currency} from '../classes/currency.enum';
import {Cryptocurrency} from '../classes/cryptocurrency.enum';
import {Pair} from '../classes/pair';
import {ConverterService} from '../services/converter.service';
import {Exchange} from '../classes/exchange.enum';
import {CryptowatchService} from '../services/cryptowatch.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  providers: [ConverterService, CryptowatchService],
})
export class ConverterComponent implements OnInit {
  select1 = Object.keys(Cryptocurrency);
  select2 = Object.keys(Currency);
  exchanges = Object.keys(Exchange);
  selectedLeft: string;
  selectedRight: string;
  selectedExchange: string;
  source: number;
  converted: number;

  constructor(private converterService: ConverterService) {
  }

  ngOnInit() {
    this.source = 1;
    this.selectedLeft = Cryptocurrency.BTC.toUpperCase();
    this.selectedRight = Currency.EUR.toUpperCase();
    this.selectedExchange = Exchange.GDAX.toUpperCase();
    this.calculate();
  }

  calculate() {
    let leftiscur = true;
    let left = Currency[this.selectedLeft];
    if (left === undefined) {
      leftiscur = false;
      left = Cryptocurrency[this.selectedLeft];
    }
    let right;
    if (leftiscur) {
      right = Cryptocurrency[this.selectedRight];
    } else {
      right = Currency[this.selectedRight];
    }
    let pair: Pair;
    if (leftiscur) {
      pair = new Pair(right, left);
    } else {
      pair = new Pair(left, right);
    }
    console.log(this.selectedExchange);
    this.converterService.convert(pair, Exchange[this.selectedExchange], this.source, !leftiscur)
      .subscribe(result => {
        console.log(this.selectedExchange);
        console.log(result);
        this.converted = result;
      });
  }

  onChange() {
    console.log('uu');
    this.calculate();
  }

  swap() {
    this.source = this.converted;
    const tempcur = this.selectedLeft;
    this.selectedLeft = this.selectedRight;
    this.selectedRight = tempcur;
    const templist = this.select1;
    this.select1 = this.select2;
    this.select2 = templist;
    this.calculate();
  }
}
