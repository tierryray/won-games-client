import Highlight from '.'
import { render } from '@testing-library/react'

describe('<Highlight />', () => {
  it('should render the heading', () => {
    const { container } = render(<Highlight />)

    // expect(screen.getByRole('heading', { name: /Highlight/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
