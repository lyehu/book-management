import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { routerConfig } from '../router';

export const renderWithRouter = (route: string) => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries: [route],
    basename: '/',
  });

  return render(
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>,
  );
};

export const renderWithProviders = ({ Component }: { Component: ReactNode }) => {
  return render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>);
};
