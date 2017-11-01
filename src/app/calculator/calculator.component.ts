import { Component, OnInit } from '@angular/core';
import {ProfitcalculatorService} from '../profitcalculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  private amount: number;
  private quick: boolean;
  private maker: number;
  private taker: number;
  private low: number;
  private high: number;
  private profit: number;

  constructor(private pcService: ProfitcalculatorService) { }

  ngOnInit() {
    this.amount = 100;
    this.quick = false;
    this.maker = 0.16;
    this.taker = 0.26;
    this.low = 5400;
    this.high = 5500;
    this.onChange();
  }

  onChange() {
    this.profit = ProfitcalculatorService.calculateProfitFromRange(this.amount, this.quick,
      this.maker / 100, this.taker / 100, this.low, this.high);
  }

}
