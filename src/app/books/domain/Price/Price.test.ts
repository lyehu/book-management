import { expect, describe, it } from 'vitest';
import Price from './Price';
import { PriceErrors } from './errors';

describe('Price value object', () => {
  it('should create price with decimals', () => {
    const title = new Price('1.99');
    expect(typeof title).toBe('object');
  });

  it('should create price with integer', () => {
    const title = new Price('100');
    expect(typeof title).toBe('object');
  });

  it('should throw error if price contains spaces', () => {
    expect(() => new Price(' ')).toThrow(PriceErrors.INVALID_PARAMS);
  });

  it('should throw error if price contains special symbols', () => {
    expect(() => new Price('`+¡')).toThrow(PriceErrors.INVALID_PARAMS);
  });
});
