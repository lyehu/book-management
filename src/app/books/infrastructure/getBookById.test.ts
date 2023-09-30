import { booksFixture } from '../../../test/fixtures';
import { BookErrorCode } from '../domain/errors';
import { getByBookId } from './getByBookId';

describe('Get book by id', () => {
  it('should return book details given an id', async () => {
    const book = await getByBookId('2');
    expect(book).toEqual(booksFixture[1]);
  });

  it("should throw an error if book doesn't exist", async () => {
    expect(async () => await getByBookId('123')).rejects.toThrow(BookErrorCode.NOT_FOUND);
  });
});
