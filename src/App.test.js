import { render, screen } from '@testing-library/react';
import Appold from './Appold';

test('renders learn react link', () => {
  render(<Appold />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
