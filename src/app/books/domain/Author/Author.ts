import { AuthorErrors } from './errors';

export const AUTHOR_REGEX = /^(?! *$)[A-Za-zÁáÉéÍíÓóÚúÑñ\s.'-]+$/;

export default class Author {
  value: string = '';

  constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }

  ensureIsValid(value: string) {
    if (!AUTHOR_REGEX.test(value)) {
      throw new Error(AuthorErrors.INVALID_PARAMS);
    }
  }
}
