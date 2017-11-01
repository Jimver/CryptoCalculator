import { Injectable } from '@angular/core';

@Injectable()
export class ProfitcalculatorService {

  constructor() { }

  static calculateProfitFromRange(amount: number, quick: boolean, maker: number, taker: number, low: number, high: number) {
    let buy: number = amount / low;
    if (quick) {
      buy *= 1 - taker;
    } else {
      buy *= 1 - maker;
    }
     return buy * high * (1 - maker) - amount;
  }
}
