import { CoverErrors } from './errors';

export const COVER_REGEX = /\.(jpg|jpeg|png|gif|bmp)$/i;

export default class Cover {
  value: string = '';

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  ensureIsValid(value: string) {
    if (!COVER_REGEX.test(value)) {
      throw new Error(CoverErrors.INVALID_PARAMS);
    }
  }
}
