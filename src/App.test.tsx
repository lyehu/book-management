import { expect, describe, it } from 'vitest';
import { renderWithRouter } from './test/renders';

import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { booksFixture } from './test/fixtures';

describe('App', () => {
  it('Navigates to book details page', async () => {
    const target = 0;
    await waitFor(() => {
      renderWithRouter('/');
    });

    const linkElement = (await screen.findAllByRole('link'))[target];
    const title = booksFixture[target].title as string;

    await userEvent.click(linkElement);

    expect(await screen.findByText(title)).toBeInTheDocument;
  });
});
