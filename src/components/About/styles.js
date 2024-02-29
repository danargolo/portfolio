"use client"

import styled from "styled-components"

export const Text = styled.p`
  margin-top: 2.5rem;
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
  align-items: center;
  padding-bottom: 1rem ;

  @media (min-width: 769px) {
    flex-direction: row;
    width: 85%;
    justify-content: center;
    align-items: center;
    
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  width: 25rem;
  height: fit-content;

  @media (min-width: 769px) {
    width: 50%;
    /* justify-content: right; */
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const AboutSentence = styled.p`
  width: fit-content;
  margin: 20px;
  font-size: 20px;
  font-weight: 700;
  text-align: justify;
  color: ${({theme}) => theme.colors.text200};

 
  
`
export const AboutText = styled.p`
  margin: 20px;
  /* text-size-adjust: 100%; */
  font-size: clamp(1rem, 3vw, 1.125rem);
  line-height: 1.5rem;
  text-align: justify;
  /* border: 2px solid red; */
  color: ${({theme}) => theme.colors.text200};

  @media (min-width: 769px) {
    width: 460px;
    height: 360px;
    text-align: left;
  }
`

