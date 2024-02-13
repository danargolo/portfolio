'use client'

import Image from 'next/image'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 5.625rem;
  background-color: ${ ({theme}) => theme.colors.primary100 };  
` 

export const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 10.0rem 0 5.5625rem;
  min-height: 5.625rem;
  z-index: 99;

  & img {
    left: 3.75rem;
  }

  & button {
      display: none;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.md}) {
      margin: 0 1.1rem 0 2.0625rem;

      & button {
        display: flex;
        /* position: fixed; */
        right: 3.75rem; ;
        z-index: 99;
        
      }
    }
`

export const MenuWrapper = styled.nav`
  width: 55%;
  margin-right: 6.25rem;

  & ul{
  display: flex;
  width: 21.5625rem;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text100 };
    li {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    position: fixed;
    margin: 0;
    top: 5.225rem;
    height: 100vh;
    width: 100vw;
    z-index: 0;
    background-color: ${ ({theme}) => theme.colors.primary100 };
    opacity: 0.95;
    transition: transform 0.65s ease-in-out 0s;

    & ul {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 45%;
      height: 50%;
      gap: 1.5rem;
    }

    ${(props) =>
      props.$active && `
        transform: translateX(55%);
        
      `}

    ${(props) => 
      !props.$active && `       
        transform: translateX(100%);
    `}
  }

`

export const Logo = styled(Image)`
  
`


