import { expect, describe, it } from 'vitest';
import { renderWithRouter } from '../../test/renders';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Not found page', () => {
  it('should render correctly', async () => {
    renderWithRouter('/not-found');

    expect(await screen.findByText('Ops, something has gone wrong')).toBeInTheDocument;
    expect(await screen.findByText("The page you're looking for doesn't seem to exist, looking for some books?"))
      .toBeInTheDocument;
    expect(await screen.findByText('See all books')).toBeInTheDocument;
  });

  it('should redirect to books list page', async () => {
    renderWithRouter('/not-found');

    const buttonElement = await screen.findByText('See all books');
    await userEvent.click(buttonElement);

    expect(await screen.findByText('Books list')).toBeInTheDocument;
  });
});
