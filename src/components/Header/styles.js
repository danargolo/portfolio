'use client'

import Image from 'next/image'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  min-height: 5.625rem;
  background-color: ${ ({theme}) => theme.colors.primary100 };
  z-index: 50;

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    position: fixed;
    width: 100vw;
  }
` 

export const ImgWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.1rem 0 0.0625rem;
  /* border: 2px solid blue; */

  & img {
    left: 3.75rem;
  }

  & button {
    display: flex;
    right: 3.75rem; ;
    z-index: 99;
  }
  
  @media (min-width: 769px) { 
    width: 50%;
    /* justify-content: space-between; */
    /* align-items: center; */
    margin: 0 14.0rem 0 16.5625rem;
    z-index: 99;

    & button {
      display: none;
    }
  }

  /* @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    margin: 0 1.1rem 0 0.0625rem;
    border: 2px solid blue;
    width: 80%;
    & button {
      display: flex;
      right: 3.75rem; ;
      z-index: 99;
      
    }
  } */
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
    top: 5.6rem;
    height: 100vh;
    width: 100vw;
    z-index: 50;
    background-color: ${ ({theme}) => theme.colors.primary100 };
    opacity: 0.95;
    transition: transform 0.65s ease-in-out 0s;

    & ul {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 50%;
      gap: 1.5rem;
    }

    ${(props) =>
      props.$active && `
        transform: translateX(45%);
        
      `}

    ${(props) => 
      !props.$active && `       
        transform: translateX(100%);
    `}
  }

`

export const Logo = styled(Image)`
  
`


