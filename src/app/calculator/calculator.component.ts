import { Component, OnInit } from '@angular/core';
import {ProfitcalculatorService} from '../services/profitcalculator.service';
import {Pair} from '../classes/pair';
import {Currency} from '../classes/currency.enum';
import {CryptowatchService} from '../services/cryptowatch.service';
import {Exchange} from '../classes/exchange.enum';
import {Cryptocurrency} from '../classes/cryptocurrency.enum';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CryptowatchService]
})
export class CalculatorComponent implements OnInit {
  amount: number;
  quick: boolean;
  maker: number;
  taker: number;
  low: number;
  high: number;
  profit: number;

  constructor(private cryptowatch: CryptowatchService) { }

  ngOnInit() {
    this.amount = 100;
    this.quick = false;
    this.maker = 0.16;
    this.taker = 0.26;
    this.low = 0;
    this.high = 0;
    this.onChange();
    this.cryptowatch.getPrice(new Pair(Cryptocurrency.BTC, Currency.EUR), Exchange.GDAX).subscribe(price => {
      this.low = price;
      this.high = price + 100;
      this.onChange();
    });
  }

  onChange() {
    this.profit = ProfitcalculatorService.calculateProfitFromRange(this.amount, this.quick,
      this.maker / 100, this.taker / 100, this.low, this.high);
  }

}
