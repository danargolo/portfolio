"use client"

import styled from "styled-components"
import { Slider } from "../ui/Slider"

export const Text = styled.p`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text100 };
`

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 25.625rem;
  gap: 3rem;
  background-color: ${({theme}) => theme.colors.primary200};
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
      width: 65.625rem;
      z-index: 0;
    }
    &>:nth-child(2) {
      /* display: none; */
    }

    
  }
`
