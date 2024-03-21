"use client"

import styled from "styled-components"
import { Slider } from "../ui/Slider"

export const Text = styled.p`
  margin-top: 2.5rem;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text100 };
`

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
  min-height: 25.625rem;
  gap: 3rem;
  background-color: ${({theme}) => theme.colors.bg100};
  z-index: 1;

`
export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  gap: 2.5rem;
`

export const StyledSlider = styled(Slider)`

  /* @media (min-width: ${({theme}) => theme.breakpoints.md}) { */
  @media (min-width: 769px) {
    width: 65.625rem;
    
    
    &>:nth-child(1) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 65.625rem;
      border: 2px solid red;
      z-index: 0;
    }
    &>:nth-child(2) {
      display: none;
    }

    
  }
`
