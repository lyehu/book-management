import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { routerConfig } from '../routerConfig';

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

export const ProvidersWrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
