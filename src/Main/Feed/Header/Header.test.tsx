import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

test('renders Header', () => {
    const { container, getByText, getByRole } = render(<Header />);

    expect(getByRole('img')).toBeInTheDocument();
    expect(getByText('Alok')).toBeInTheDocument();
    expect(getByRole('icon')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
});
