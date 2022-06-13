import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '..'
const currentCategory = 'commercial'

afterEach(cleanup)

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<PhotoList currentCategory={currentCategory} />);
  });

  it('matches snapshot', () => {
    const {asFragment} = render(<PhotoList currentCategory={currentCategory} />);
    expect(asFragment()).toMatchSnapshot();
  })
})

describe('Image is visible', () => {

  it('Image is displayed on page', () => {
    const {getByTestId} = render(<PhotoList
      currentCategory={currentCategory}
    />);

    expect(getByTestId('img0')).toHaveAttribute('src', expect.stringContaining('.jpg'))
  })
})
