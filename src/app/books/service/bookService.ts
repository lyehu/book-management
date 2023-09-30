import { redirect } from 'react-router-dom';
import { getByBookId } from '../infrastructure/getByBookId';
import { BookErrorCode } from '../domain/errors';

export const getBook = async (id: string | undefined) => {
  if (!id) {
    throw new Error(BookErrorCode.INVALID_PARAMS);
  }

  try {
    return await getByBookId(id);
  } catch (error) {
    redirect('/404');
  }
};
