import { expect, describe, it } from 'vitest';
import { AuthorErrors } from './errors';
import Author from './Author';

describe('Author value object', () => {
  it('should create an author', () => {
    const title = new Author('J.R.R. Tolkien');
    expect(typeof title).toBe('object');
  });

  it('should accept special chars', () => {
    const title = new Author('Carlos Ruiz Zafón');
    expect(typeof title).toBe('object');
  });

  it('should throw error if author contains only spaces', () => {
    expect(() => new Author(' ')).toThrow(AuthorErrors.INVALID_PARAMS);
  });

  it('should throw error if author contains special symbols', () => {
    expect(() => new Author('`+¡')).toThrow(AuthorErrors.INVALID_PARAMS);
  });
});
