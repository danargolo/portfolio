"use client"

import styled, {css} from "styled-components"

export const Text = styled.p`
  display: flex;
  font-size: 1.625rem;
  color: ${({ theme }) => theme.colors.text100 };
`

export const Tab = styled.div`
  width: 100%;
  margin: 1.25rem;
  
`

export const Menu = styled.ul`
  display: flex;
  gap: .0313rem;
  & > li {
    width: 40%;
    list-style: none;

    & > button {
      padding: 6px 4px;
      text-decoration: none;
      background: none;
      border: none;
      height: 100%;
      width: 100%;
      border-radius: .75rem .75rem 0 0;
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
  border-bottom: ${({ $active }) => (!$active ? '1px solid black' : 'none')};
  border-radius: .75rem .75rem 0 0;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.accent200op : theme.colors.bg300};

    ${({ $active }) => {
      if($active) {
        return css`
          border-left: .0625rem solid black;
          border-right: .0625rem solid black;
          border-top: .0625rem solid black;
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
  height: 15.625rem;
  background-color: ${({theme}) => theme.colors.accent200op};
  border-left: .0625rem solid black;
  border-right: .0625rem solid black;
  border-bottom: .0625rem solid black;
  border-radius: 0 0 .75rem .75rem;
`

