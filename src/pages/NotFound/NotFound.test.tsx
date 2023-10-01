import { expect, describe, it } from 'vitest';
import { renderWithProviders, renderWithRouter } from '../../test/renders';
import NotFound from '.';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Not found page', () => {
  it('should render correctly', async () => {
    await waitFor(() => {
      renderWithProviders({ Component: <NotFound /> });
    });

    expect(await screen.findByText('Ops, something has gone wrong')).toBeInTheDocument;
    expect(await screen.findByText("The page you're looking for doesn't seem to exist, looking for some books?"))
      .toBeInTheDocument;
    expect(await screen.findByText('See all books')).toBeInTheDocument;
  });

  it.skip('should redirect to books list page', async () => {
    await waitFor(() => {
      renderWithRouter('/not-found');
    });

    const buttonElement = await screen.findByText('See all books');

    await userEvent.click(buttonElement);

    expect(await screen.findByText('Books list')).toBeInTheDocument;
  });
});
