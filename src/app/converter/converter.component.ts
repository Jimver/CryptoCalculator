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
  input: number;
  converted: number;

  constructor(private converterService: ConverterService) {
  }

  ngOnInit() {
    this.input = 10;
    this.selectedLeft = Cryptocurrency.BTC.toUpperCase();
    this.selectedRight = Currency.EUR.toUpperCase();
    this.selectedExchange = Exchange.GDAX.toUpperCase();
    this.calculate();
  }

  onChange() {
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

    this.converterService.convert(pair, Exchange[this.selectedExchange], this.input, !leftiscur)
      .subscribe(result => this.converted = result);
  }

  swap() {
    this.input = this.converted;
    const tempcur = this.selectedLeft;
    this.selectedLeft = this.selectedRight;
    this.selectedRight = tempcur;
    const templist = this.select1;
    this.select1 = this.select2;
    this.select2 = templist;
    this.calculate();
  }
}
