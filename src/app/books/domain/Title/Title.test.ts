import { expect, describe, it } from 'vitest';
import Title from './Title';
import { TitleErrors } from './errors';

describe('Title value object', () => {
  it('should create title', () => {
    const title = new Title('title');
    expect(typeof title).toBe('object');
  });

  it('should throw error if title contains only spaces', () => {
    expect(() => new Title(' ')).toThrow(TitleErrors.INVALID_PARAMS);
  });

  it('should throw error if title contains special chars', () => {
    expect(() => new Title('.-. ')).toThrow(TitleErrors.INVALID_PARAMS);
  });
});
