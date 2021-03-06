import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// cleanup the vdom
afterEach(cleanup);


// test the about component
describe('About component', () => {
  // First Test
  it('renders', () => {
    render(<About />);
  });

  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });


})
