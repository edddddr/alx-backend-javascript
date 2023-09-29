import { Currency } from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this._amount = typeof amount === 'number' ? amount : 0;
    this._currency = currency instanceof Currency ? currency : null;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    }
  }

  displayFullPrice() {
    if (this._currency) {
      return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    } else {
      return '';
    }
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    } else {
      return NaN;
    }
  }
}
