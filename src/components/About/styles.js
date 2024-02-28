"use client"

import styled from "styled-components"

export const Text = styled.p`
  display: flex;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text100 };
`

export const About = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: fit-content; 
  gap: 3rem;
  background-color: ${({theme}) => theme.colors.primary200};  
  position: relative;
  z-index: 1;

  & hr {
    width: 84%;
  }
`
export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  width: 25rem;
  height: fit-content;
`

export const SentenceText = styled(Text)`
  margin: 20px;
  font-size: 20px;
  font-weight: 700;
  text-align: justify;
  color: black;
`
export const AboutText = styled(Text)`
  margin: 20px;
  font-size: clamp(18px, 3vw, 20px);
  line-height: 1.5rem;
  text-align: justify;
`

