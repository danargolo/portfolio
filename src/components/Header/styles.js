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
  margin: 0 10.5rem 0 8.5625rem;
  align-items: center;


  & Ul {
    display: flex;
    width: 21.5625rem;
    justify-content: space-between;
    border: 2px solid green;

    li {
      font-size: 1.5rem;
    }
  }

`

export const Logo = styled(Image)`
`


