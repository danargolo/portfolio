"use client"

import styled from "styled-components"

export const Text = styled.p`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text100 };
`

export const Projects = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25.625rem;
  background-color: ${({theme}) => theme.colors.primary200};

`
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
  /* border: 2px solid red; */
`

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 5px;
  cursor: pointer;
`