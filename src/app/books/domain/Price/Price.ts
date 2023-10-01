import { PriceErrors } from './errors';

export const PRICE_REGEX = /^\d+(\.\d{1,2})?$/;

export default class Price {
  value: string = '';

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  ensureIsValid(value: string) {
    if (!PRICE_REGEX.test(value)) {
      throw new Error(PriceErrors.INVALID_PARAMS);
    }
  }
}
