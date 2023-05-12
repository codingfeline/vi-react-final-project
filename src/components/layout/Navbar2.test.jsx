import React from 'react'
// import { render, screen } from '@testing-library/react'
import { render, screen } from '../../../test-utils'
import { describe, it, expect } from 'vitest'
import Navbar2 from './Navbar2'

describe('group', () => {
  it('renders navbar links', () => {
    render(<Navbar2 />)
    const el = screen.getByText(/About/)
    expect(el).toBeDefined()
  })
  it('renders navbar list', () => {
    render(<Navbar2 />)
    const el = screen.getByText(/compo/i)
    expect(el).toBeDefined()
  })
})
