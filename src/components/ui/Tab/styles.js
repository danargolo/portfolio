"use client"

import styled, {css} from "styled-components"

export const Text = styled.p`
  display: flex;
  font-size: 1.625rem;
  color: ${({ theme }) => theme.colors.text100 };
`

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* margin: 2.0rem; */
  /* text-align: -webkit-center; */


  @media (min-width: 769px) {
    width: 35%;
  }

  /* @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    width: 100vw;
    margin: 0;
  } */
  
`

export const Menu = styled.ul`
  display: flex;
  width: 100%;
  gap: .2rem;
  /* margin: 1rem; */
  & > li {
    width: 40%;
    list-style: none;


    /* li > button {
      padding: 6px 4px;
      text-decoration: none;
      background: none;
      border: none;
      height: 100%;
      width: 100%;
      border-radius: .75rem .75rem 0 0;
    } */

    &:last-child {
      width: 20%;
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    justify-content: center;
    /* width: 100vw; */
    margin: 0;

    & > li {
      width: 30%;
    }

    & > li:last-child {
      width: 10%;
    }
  }


`

export const ItemTab = styled.div`
  padding: .375rem .25rem;
  text-decoration: none;
  text-align: center;
  background: none;
  border: none;
  height: 100%;
  width: 100%;
  /* border-radius: .75rem .75rem 0 0; */
  color: ${({theme}) => theme.colors.text100};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary100 : theme.colors.bg300}; //background degrade?

    /* ${({ $active }) => {
      if($active) {
        return css`
      `
        }
    }} */
    
  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    /* width: 80%; */
    font-size: clamp(0.9rem, 2vw, 1rem);
  }
`

export const Content = styled.div`
  display: ${({$active}) => $active ? 'grid' : 'none'};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  /* width: 100vmax; */
  height: 15.625rem;
  justify-content: space-around;
  align-content: center;
  gap: 15px;
  padding: 10px;
  color: ${({theme}) => theme.colors.text200};
  /* background-color: ${ ({theme}) => theme.colors.primary100 }; */
  /* background: ${({theme}) => theme.colors.degrade}; */
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  border-radius: 0 0 .75rem .75rem;
  width: 100%;

  @media (min-width: 769px) {
    width: 100%;
  }

`

export const Item = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 60px;
  height: 60px;
`

