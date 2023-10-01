import { AuthorErrors } from './errors';

const REGEX = /^(?! *$)[A-Za-zÁáÉéÍíÓóÚúÑñ\s.'-]+$/;

export default class Author {
  value: string = '';

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  ensureIsValid(value: string) {
    if (!REGEX.test(value)) {
      throw new Error(AuthorErrors.INVALID_PARAMS);
    }
  }
}
