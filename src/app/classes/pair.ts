import {Currency} from './currency.enum';

export class Pair {
  from: Currency;
  to: Currency;

  constructor(from: Currency, to: Currency) {
    this.from = from;
    this.to = to;
  }

  toString() {
    return this.from + this.to;
  }
}
