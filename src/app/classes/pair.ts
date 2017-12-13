import {Currency} from './currency.enum';
import {Cryptocurrency} from './cryptocurrency.enum';

export class Pair {
  crypto: Cryptocurrency;
  fiat: Currency;

  constructor(from: Cryptocurrency, to: Currency) {
    this.crypto = from;
    this.fiat = to;
  }

  toString() {
    return this.crypto + this.fiat;
  }
}
