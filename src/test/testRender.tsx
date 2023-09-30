import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import BooksContext from '../context/BooksContext';

const testRender = ({ Component }: { Component: ReactNode }) => {
  return render(
    <ThemeProvider theme={{}}>
      <BooksContext.Provider
        value={{
          findBooks: () => ({
            data: {},
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
