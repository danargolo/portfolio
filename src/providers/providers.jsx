"use client"

import PropTypes from 'prop-types';
import { GlobalStyles } from "@/styles/global"
import { theme } from "@/styles/theme"
import { ThemeProvider } from "styled-components"

export const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        {children}
    </ThemeProvider>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};