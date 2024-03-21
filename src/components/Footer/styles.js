'use client'

import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 3.125rem;
  background-color: ${ ({theme}) => theme.colors.primary100 };

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    position: fixed;
    width: 100vw;
    z-index: 50;
  }
` 
