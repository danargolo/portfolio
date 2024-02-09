'use client'

import Image from 'next/image'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 5.625rem;
  background-color: ${ ({theme}) => theme.colors.darkNavy };

`

export const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 10.0rem 0 8.5625rem;
  align-items: center;

  & button {
    display: none;
  }


    & ul{
    @media (max-width: ${({theme}) => theme.breakpoints.md}) {
      display: none;
    }

    display: flex;
    width: 21.5625rem;
    justify-content: space-between;

    li {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    margin: 0 1.1rem 0 2.0625rem;

    & button {
      display: flex;
    }
  }

`

export const Logo = styled(Image)`
`


