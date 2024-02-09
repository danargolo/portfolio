'use client'

import PropTypes from 'prop-types';
import { GlobalStyles } from '../styles/global'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { DataProvider } from '../context';

export const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <GlobalStyles />
          {children}
      </DataProvider>
    </ThemeProvider>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};