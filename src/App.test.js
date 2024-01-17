import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('renders without issue', () => {
    render(<App />);

    expect(screen.getByText(/Side/)).toBeInTheDocument();
  });
});
