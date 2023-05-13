import React from 'react'
import { describe, it, expect } from 'vitest'
// import { render, screen } from '@testing-library/react'
import { render, screen } from '../../test-utils'
import About from './about'

describe('group', () => {
  it('renders heading by name', () => {
    render(<About />)
    const el = screen.getByRole('heading', {
      name: 'about',
    })
    expect(el).toBeDefined()
  })
  it('renders heading by level #', () => {
    render(<About />)
    const el = screen.getByRole('heading', {
      level: 2,
    })
    expect(el).toBeDefined()
  })
  it('renders email textbox id', () => {
    render(<About />)
    const el = screen.getByRole('textbox', {
      name: 'Email address',
    })
    expect(el).toBeDefined()
  })
  it('renders checkbox by label', () => {
    render(<About />)
    const el = screen.getByLabelText(
      'I agree to the terms Terms and Privacy Policy'
    )
    expect(el).toBeDefined()
  })
})
