"use client"

import styled, {css} from "styled-components"

export const Text = styled.p`
  display: flex;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text100 };
`

export const Tab = styled.div`
  width: 100%;
  /* height: 600px; */
  
`

export const Menu = styled.ul`
  display: flex;
  gap: 0.5px;
  & > li {
    width: 40%;
    /*  */
    /* background-color: aliceblue; */
    /* border: 1px solid red; */
    
    /* border-radius: 12px 12px 0 0; */
    list-style: none;

    & > button {
      padding: 6px 4px;
      text-decoration: none;
      background: none;
      border: none;
      height: 100%;
      width: 100%;
      border-radius: 12px 12px 0 0;
      /* background-color: ${({ $active, theme }) =>
        $active ? theme.colors.accent200op : theme.colors.bg300}; */

      /* &:hover {
        cursor: pointer;
        background-color: ${({theme}) => theme.colors.accent200op};
      } */

      /* ${({ $actived }) => {
        if($actived) {
          return css`
            background-color: ${({theme}) => theme.colors.accent200op};
      `
        }
      }} */
    }
  }
`

export const ItemTab = styled.div`
  padding: 6px 4px;
  text-decoration: none;
  text-align: center;
  background: none;
  border: none;
  height: 100%;
  width: 100%;
  border-bottom: ${({ $active }) => (!$active ? '1px solid black' : 'none')};
  border-radius: 12px 12px 0 0;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.accent200op : theme.colors.bg300};

    ${({ $active }) => {
      if($active) {
        return css`
          border-left: 1px solid black;
          border-right: 1px solid black;
          border-top: 1px solid black;
      `
        }
      }}
    
  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.accent200op};
  }
`

export const Content = styled.div`
  display: ${({$active}) => $active ? 'block' : 'none'};
  height: 250px;
  background-color: ${({theme}) => theme.colors.accent200op};
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 0 0 12px 12px;
`

