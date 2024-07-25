"use client"

import styled from "styled-components"
import { Slider } from "../ui/Slider"
import { Anchor } from "../ui/Anchor"

export const Text = styled.p`
  padding-top: 5rem;
  font-size: clamp(1.032rem, 2vw, 1.125rem);
  font-weight: 700;
  text-align: center;
  color: ${({theme}) => theme.colors.text200};

  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    width: 80%;
  }
`

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
  min-height: 25.625rem;
  padding-bottom: 5rem;
  /* gap: 3rem; */
  background-color: ${({theme}) => theme.colors.bg100};
  z-index: 1;

`
export const ProjectsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap:3rem;
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

export const StyledAnchor = styled(Anchor)`
  /* margin: 3rem; */
  
`
