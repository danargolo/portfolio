"use client"

import styled, {css} from "styled-components"

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* min-height: 25.625rem;
  background-color: ${({theme}) => theme.colors.primary200}; */
  z-index: 1;

`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 21.9rem;
  height: 28.9375rem;
  /* margin-left: 0.9rem; */
  /* padding: 10px; */
  gap: 2.7rem;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;

  & > :first-child {
    margin-left: 2.2rem;
  }

  & > :last-child {
    margin-right: 2.2rem;
  }

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-template-rows: auto;
    width: 85%;
    height: fit-content;
    margin-top: 30px;
    justify-content: center;
    overflow-x: visible;


    & > :first-child {
      margin-left: 0;
    }

    & > :last-child {
      margin-right: 0;
    }
  }
`

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem;
  width: 65%;
  gap: 12px;
  z-index: 1;
  
  @media (min-width: 769px) {
    display: none;
  }

`
export const Indicator = styled.div`
  display: flex;
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  z-index: 0;


  ${({$active}) => {
    if($active) {
      return css`
        background-color: white;
        transform: translateY(-1.5px) scale(1.10);
        z-index: 0;
        
      `
    }
  }}

`