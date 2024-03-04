'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
  }

  hr {
    height: 0.225rem;
    background-image: linear-gradient( 45deg,
      ${({theme}) => theme.colors.primary100 } 0%, 
      ${({theme}) => theme.colors.bg200 } 51%, 
      ${({theme}) => theme.colors.primary100 } 100%
    );
    border: none;
  }

  p {
    color: ${({ theme }) => theme.colors.text100 };
  }

`
