import { expect, describe, it } from 'vitest';
import { CoverErrors } from './errors';
import Cover from './Cover';

describe('Cover value object', () => {
  it('should create a cover', () => {
    const cover = new Cover('image.png');
    expect(typeof cover).toBe('object');
  });

  it('should throw error if cover is not an image', () => {
    expect(() => new Cover('Image')).toThrow(CoverErrors.INVALID_PARAMS);
  });
});
