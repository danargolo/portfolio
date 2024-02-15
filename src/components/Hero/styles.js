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
  align-items: center;
  padding: 10.9375rem 0;
  gap: 3rem;
  width: 26rem;


`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.9rem;
  gap: 1.25rem;
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  width: 20rem;
  align-items: center;
  margin-left: 1.5625rem;
`

export const NameText = styled(Text)`
`
export const RoleText = styled(Text)`
  font-size: 2rem;
`
export const SentenceText = styled(Text)`
`
