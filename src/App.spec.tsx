import App from './App';
import { render, screen } from './test-utils';

describe(`App`, () => {
  it(`should render`, () => {
    render(<App />);

    expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument();
  });
});
