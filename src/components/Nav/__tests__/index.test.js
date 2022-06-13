import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  //baseline test
  it('renders', () => {
    render(<Nav />);
  })
  //snapshot test
  it('Matches snapshot', () => {
    const {asFragment} = render(<Nav />)
    expect(asFragment()).toMatchSnapshot();
  })
})

describe('Emoji is visible', () => {
  it('inserts emoji into h2', () => {
    const {getByLabelText} = render(<Nav />);
      expect(getByLabelText('camera')).toHaveTextContent('📸');
  })
})

describe('Links are visible', () => {

  it('Inserts text into links', () => {
    const {getByTestId} = render(<Nav />)
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  })
})
