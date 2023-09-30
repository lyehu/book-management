import { describe, expect, it } from 'vitest';
import { findBooks } from './findBooks';
import { booksFixture } from '../../../test/fixtures';
import { ErrorCode } from '../../../utils/errors';

describe('Find books', () => {
    it('should return books', async() => {
        const result = await findBooks({page: 1, perPage: 25, failRandomly: false})
       
        expect(result).toEqual({
            data: booksFixture
        })
    })

    it('should return error', async() => {
        const result = await findBooks({page: 1, perPage: 25, failRandomly: true})
       
        expect(result).not.toEqual({
            data: booksFixture
        })

        expect(result).toEqual({ error: { code: ErrorCode.SOMETHING_WENT_WRONG } })
    })
})