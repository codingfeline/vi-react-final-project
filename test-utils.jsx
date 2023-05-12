import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { BrowserRouter } from 'react-router-dom'

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
