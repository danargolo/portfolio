'use client'

import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  min-height: 2.8125rem;
  background-color: ${ ({theme}) => theme.colors.primary100 };
  z-index: 51;

  /* @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    position: fixed;
    width: 100vw;
    z-index: 50;
  } */
` 
