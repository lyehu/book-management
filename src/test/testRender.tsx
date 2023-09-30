import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import BooksContext from '../context/BooksContext';
import { booksFixture } from './fixtures';

const testRender = ({ Component }: { Component: ReactNode }) => {
  return render(
    <ThemeProvider theme={{}}>
      <BooksContext.Provider
        value={{
          findBooks: () => ({
            booksFixture,
            error: undefined,
          }),
        }}
      >
        {Component}
      </BooksContext.Provider>
    </ThemeProvider>,
  );
};

export default testRender;
