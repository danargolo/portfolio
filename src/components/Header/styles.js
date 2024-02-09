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

export const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 10.0rem 0 5.5625rem;
  min-height: 5.625rem;
  z-index: 99;

  & img {
    /* position: fixed; */
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
  /* display: flex;
  width: 100%; */
  top: 0;
  left:6.5rem;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out 0s;
  /* right: 0; */

  
    & ul{
    display: flex;
    width: 21.5625rem;
    justify-content: space-between;

    li {
      font-size: 1.5rem;
    }
  }

  /* @media (max-width: ${({theme}) => theme.breakpoints.md}) {
      
    } */

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    /* display: none; */
    /* transform: translateX(100%); */
    

    /* & button {
      display: flex;
      position: relative;
      z-index: 0;
    } */

    ${(props) =>
        props.$active && `
          display:flex;
          justify-content: space-between;
          margin: 0 10rem 0 8.5625rem;
          align-items: center;
          z-index: 0;
          border: 2px solid red;
          flex-direction: column;
          border: 2px solid red;
          height: 100vh;
          width: 50vw;
          position: fixed;
          opacity: 0.95;
          background-color: #1F3A5F;
          transform: translateX(0);
          transition: transform 0.5s ease-in-out 0s;
          // left:52%;

          & ul{
            flex-direction: column;
            width: 0;
            position: relative;
          }
        `}

    ${(props) => 
      props.$active || `
        display:flex;
        border: 2px solid red;
        flex-direction: column;
        border: 2px solid blue;
        height: 100vh;
        width: 50vw;
        position: fixed;
        background-color: #1F3A5F;
        transform: translateX(100%);
        transition: transform 0.5s ease-in-out 0s;
        // left:52%;

        & ul {
          flex-direction: column;
          width: 0;
          position: relative;
        }
    `

    }
  }

`

export const Logo = styled(Image)`
  
`


