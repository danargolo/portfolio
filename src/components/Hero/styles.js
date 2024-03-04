"use client"

import styled from "styled-components"
import Image from "next/image"

const Text = styled.p`
   color: ${({ theme }) => theme.colors.text100 };
`

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25.625rem;
  background-color: ${({theme}) => theme.colors.bg100};
  width: 100vw;

`
export const ImageWrapper = styled(Image)`
  display: flex;
  position: absolute;
  left: 0;
  z-index: 0;
`

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4rem;
  padding: 10.9375rem 0;
  gap: 3rem;
  width: 25rem;

  & Button {
      margin: 0;
    }

  @media (min-width: 769px) {
    width: 85%;
    margin-left: 15rem;
    justify-content: center;    
  }


`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 40%;
  align-items: center;
  /* margin-left: 1.5625rem; */
`

export const NameText = styled(Text)`
`
export const RoleText = styled(Text)`
  font-size: clamp(1.5rem, 3vw, 1.75rem);
`
export const SentenceText = styled(Text)`
`
