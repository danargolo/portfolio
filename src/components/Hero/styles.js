"use client"

import styled from "styled-components"
import Image from "next/image"

const Text = styled.p`
   color: ${({ theme }) => theme.colors.text100 };
`

export const Hero = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25.625rem;
  background-color: ${({theme}) => theme.colors.bg100};
  /* width: 100vw; */
  z-index: 2;

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
  margin-top: 4rem;
  padding: 10.9375rem 0;
  gap: 3rem;
  width: 25rem;

  & Button {
      margin: 0;
    }

  @media (min-width: 769px) {
    width: 65%;
    /* margin-left: 10rem; */
    justify-content: center;
    align-items: center;
    z-index: 10;
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
  gap: 1.25rem;

  @media (min-width: 769px) {
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

export const NameText = styled(Text)`
`
export const RoleText = styled(Text)`
  font-size: clamp(1.5rem, 3vw, 1.75rem);
`
export const SentenceText = styled(Text)`
`