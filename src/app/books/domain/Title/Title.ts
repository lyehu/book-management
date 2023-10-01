import { TitleErrors } from './errors';

export const TITLE_REGEX = /^(?=.*[\p{L}\p{N}])([\p{L}\p{N}\p{P}\p{Zs}'"“”‘’-]+)$/u;

export default class Title {
  value: string = '';

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  ensureIsValid(value: string) {
    if (!TITLE_REGEX.test(value)) {
      throw new Error(TitleErrors.INVALID_PARAMS);
    }
  }
}
