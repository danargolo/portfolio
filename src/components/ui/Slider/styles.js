"use client"

import styled, {css} from "styled-components"

export const Slider = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* min-height: 25.625rem;
  background-color: ${({theme}) => theme.colors.primary200}; */

`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 21.9rem;
  height: 30.9375rem;
  /* margin-left: 0.9rem; */
  /* padding: 10px; */
  gap: 1.7rem;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;

  & > :first-child {
    margin-left: 1.5rem;
  }

  & > :last-child {
    margin-right: 1.5rem;
  }
`

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 65%;
  gap: 12px;
`
export const Indicator = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;


  ${({$active}) => {
    if($active) {
      return css`
        background-color: white;
        transform: translateY(-1.5px) scale(1.10);
      `
    }
  }}

`