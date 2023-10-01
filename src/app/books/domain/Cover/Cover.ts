import { CoverErrors } from './errors';

const REGEX = /\.(jpg|jpeg|png|gif|bmp)$/i;

export default class Cover {
  value: string = '';

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  ensureIsValid(value: string) {
    if (!REGEX.test(value)) {
      throw new Error(CoverErrors.INVALID_PARAMS);
    }
  }
}
