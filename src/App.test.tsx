import { expect, describe, it } from 'vitest';
import testRender from './test/testRender';
import MainPage from './pages/Main';
import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { booksFixture } from './test/fixtures';

describe('App', () => {
  it('Navigates to book details page', async () => {
    const target = 0;
    await waitFor(() => {
      testRender({ Component: <MainPage /> });
    });

    const linkElement = (await screen.findAllByRole('link'))[target];
    const title = booksFixture[target].title as string;

    await userEvent.click(linkElement);

    expect(await screen.findByText(title)).toBeInTheDocument;
  });
});
