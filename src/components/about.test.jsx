import React from 'react'
import { describe, it, expect } from 'vitest'
// import { render, screen } from '@testing-library/react'
import { render, screen } from '../../test-utils'
import About from './about'

describe('group', () => {
  it('renders learn react link', () => {
    render(<About />)
    const linkElement = screen.getByText(/increment/i)
    expect(linkElement).toBeDefined()
  })
})
