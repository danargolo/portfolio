"use client"

import styled from "styled-components"

export const Text = styled.p`
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
  align-items: center;
  padding: 3.9375rem 0;
  gap: 3rem;
  width: 26rem;
`
export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 23.5rem;
  border: 2px solid red;
  padding: 10px;
  gap: 1.7rem;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
`

