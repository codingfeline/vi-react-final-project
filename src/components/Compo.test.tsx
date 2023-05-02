import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Compo from './Compo'

describe('group', () => {
  it('renders learn react link', () => {
    render(<Compo />)
    const linkElement = screen.getByText(/welcome to testing/i)
    expect(linkElement).toBeDefined()
  })
  it('renders learn react link', () => {
    render(<Compo />)
    const linkElement = screen.getByText(/welcome to testing/i)
    expect(linkElement).toBeDefined()
  })
})
