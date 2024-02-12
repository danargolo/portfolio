"use client"

import styled from "styled-components"

const Text = styled.p`
   color: ${({ theme }) => theme.colors.text100 };
`

export const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25.625rem;
  background-color: ${({theme}) => theme.colors.bg100};

`

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.15rem;
  width: 26rem;


`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const IconsContainer = styled.div`
  display: flex;
`

export const NameText = styled(Text)`
`
export const RoleText = styled(Text)`
  font-size: 2rem;
`
export const SentenceText = styled(Text)`
`
