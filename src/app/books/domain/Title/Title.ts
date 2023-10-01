import { TitleErrors } from './errors';

const MIN_CHARS = 2;

export default class Title {
  value: string = '';

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  ensureIsValid(value: string) {
    if (value.length < MIN_CHARS) {
      throw new Error(TitleErrors.INVALID_PARAMS);
    }
  }
}
