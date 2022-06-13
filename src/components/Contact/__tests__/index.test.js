import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..'

afterEach(cleanup);

describe('Contact component', () => {
  it('Renders', () => {
    render(<Contact/>);
  })

  it('Matches snapshot', () => {
    const {asFragment} = render(<Contact/>);
    expect(asFragment()).toMatchSnapshot();
  })

})

describe('elements are visible', () => {
  it('renders h1 tag correctly', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    expect(getByTestId('submit')).toHaveTextContent('Submit');
  })
})
