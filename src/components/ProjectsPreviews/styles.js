"use client"

import styled from "styled-components"
import { Slider } from "../ui/Slider"

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
export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.1rem 0;
  gap: 3rem;
  width: 26rem;
`

export const Cards = styled(Slider)`
  /* @media (min-width: ${({theme}) => theme.breakpoints.md}) { */
  @media (min-width: 769px) {
    width: 65.625rem;
    
    &>:nth-child(1) {
      width: 65.625rem;
    }
    &>:nth-child(2) {
      /* display: none; */
    }

    
  }
`
