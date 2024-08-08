"use client"

import styled from "styled-components"
import { Slider } from "../ui/Slider"
import { Anchor } from "../ui/Anchor"

export const Text = styled.p`
  margin: 1.25rem;
  /* padding-top: 5rem; */
  font-size: clamp(1.032rem, 2vw, 1.125rem);
  /* font-weight: 700; */
  text-align: justify;
  align-self: self-start;
  color: ${({theme}) => theme.colors.text200};
  width: 80%;

  @media (min-width: 769px) {
    margin: 0;

  }
`

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
  min-height: 25.625rem;
  /* padding-bottom: 2rem; */
  /* gap: 3rem; */
  background-color: ${({theme}) => theme.colors.bg100};
  z-index: 1;
`
export const ProjectsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  /* gap:3rem; */
  /* border: 2px solid red; */
  padding-top: 5.625rem;
  /* padding: 5.625rem 0; */


  @media (min-width: 769px) {
    /* flex-direction: row; */
    position: relative;
    /* bottom: 50px; */
    width: 60%;
    gap: 2.25rem;
    justify-content: space-around;
    align-items: center;
    
  }

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
