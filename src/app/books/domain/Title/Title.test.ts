import { expect, describe, it } from 'vitest';
import Title from './Title';
import { TitleErrors } from './errors';

describe('Title value object', () => {
  it('should create title', () => {
    const title = new Title('title');
    expect(typeof title).toBe('object');
  });

  it('should throw error if title is too short', () => {
    expect(() => new Title('a')).toThrow(TitleErrors.INVALID_PARAMS);
  });
});
