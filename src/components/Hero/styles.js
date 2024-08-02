"use client"

import styled from "styled-components"
import Image from "next/image"

const Text = styled.p`
  margin-top: .5rem;
  color: ${({ theme }) => theme.colors.text100 };
  font-family: Roboto, sans-serif;
`

export const Hero = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25.625rem;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.bg100};
  /* width: 100vw; */
  z-index: 1;

`
export const ImageWrapper = styled(Image)`
  display: flex;
  position: absolute;
  left: 0;
  z-index: 2;
`

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 3rem;
  padding: 10.9375rem 0;
  gap: 3rem;
  width: 25rem;
  border: 2px solid red;

  & Button {
      margin: 0;
    }

  @media (min-width: 769px) {
    position: relative;
    width: 65%;
    bottom: 60px;
    right: 20px;
    /* margin-left: 10rem; */
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    width: 20rem;
    /* font-size: clamp(0.9rem, 2vw, 1rem); */
  }


`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0.9rem; */
  /* gap: 1.25rem; */

  @media (min-width: 769px) {
    position: relative;
    width: 85%;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    
  }
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  /* width: 40%; */
  align-items: center;
  justify-content: center;
  
  @media (min-width: 769px) {
    width: 85%;
    justify-content: start;
    align-items: flex-start;
    margin-left: 4.5625rem;
    /* padding: 0; */
    
  }
`
export const AnchorContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  /* width: 40%; */
  align-items: center;
  justify-content: center;
  /* margin-left: 1.5625rem; */
  @media (min-width: 769px) {
    width: 85%;
    justify-content: start;
    align-items: flex-start;
    padding: 0;
    
  }
`

export const IntroText = styled(Text)`
  font-size: clamp(1.125rem, 2vw, 1.25rem);
`
export const NameText = styled(Text)`
  
  /* -webkit-text-stroke: 4px #acc2ef;
  -webkit-text-stroke-width: 1px;
  color: rgba(1, 1, 1, 0.4); */
  font-size: clamp(2.5rem, 10vw, 4.375rem);

`
export const RoleText = styled(Text)`
  font-size: 48px;
  color: rgba(255, 149, 0, 0.95);
  /* color: #FFD700; */
  text-align: center;
  /* font-weight: bolder; */
  /* -webkit-text-stroke: 4px #acc2ef;
  -webkit-text-stroke-width: 1px;
  color: rgba(1, 1, 1, 0.4) */
  /* font-size: clamp(1.875rem, 3vw, 2.25rem); */
`
export const SentenceText = styled(Text)`
  margin-top: 1.75rem;
  text-align: justify;
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  

`