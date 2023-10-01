import { PriceErrors } from './errors';

const REGEX = /^\d+(\.\d{1,2})?$/;

export default class Price {
  value: string = '';

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  ensureIsValid(value: string) {
    if (!REGEX.test(value)) {
      throw new Error(PriceErrors.INVALID_PARAMS);
    }
  }
}
