import { BookErrorCode } from '../domain/errors';
import { getBook } from './bookService';

describe('Book service', () => {
  describe('Get Book', () => {
    it('should throw an error if id no valid', async () => {
      expect(async () => await getBook(undefined)).rejects.toThrow(BookErrorCode.INVALID_PARAMS);
    });
  });
});
