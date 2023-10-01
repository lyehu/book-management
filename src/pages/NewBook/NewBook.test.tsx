import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import NewBook from '.';
import { ProvidersWrapper } from '../../test/renders';

describe('New book page', () => {
  it.skip('should render all fields', async () => {
    render(<NewBook />, { wrapper: ProvidersWrapper });

    const titleInput = await screen.findByLabelText('Title');
    const authorInput = await screen.findByLabelText('Author');
    const priceInput = await screen.findByLabelText('Price');
    const coverInput = await screen.findByLabelText('Cover');

    expect(titleInput).toBeInTheDocument;
    expect(authorInput).toBeInTheDocument;
    expect(priceInput).toBeInTheDocument;
    expect(coverInput).toBeInTheDocument;
  });
});
