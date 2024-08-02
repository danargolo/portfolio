"use client"

import styled from "styled-components"
import Image from "next/image"

export const Tittle = styled.p`
  margin-top: 5rem;
  display: flex;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text100 };
  
  @media (min-width: 769px) {
    margin-top: 3rem;
    
  }
`
export const ImageWrapper = styled(Image)`
`

export const About = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
  min-height: 25.625rem;
  height: 100vh;
  /* height: fit-content; */
  padding-bottom: 5rem;
  /* padding-top: 5rem; */
  /* gap: 3rem; */
  background-color: ${({theme}) => theme.colors.primary100};
  /* background-color: black; */
  position: relative;
  z-index: 1;

  & hr {
    width: 84%;
  }
`

export const AboutWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 5rem; */
  /* border: 2px solid red; */

  @media (min-width: 769px) {
    /* flex-direction: row; */
    width: 60%;
    gap: 2.25rem;
    justify-content: space-around;
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
    width: 100%;
    flex-direction: row;
    justify-content: left;
    align-items: flex-start;
    gap: 8rem;

    /* justify-content: right; */
    /* align-items: flex-start; */
  }

  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    width: 22rem;
    font-size: clamp(0.9rem, 2vw, 1rem);
  }
`

export const AboutSentence = styled.p`
  width: fit-content;
  font-size: clamp(1.032rem, 2vw, 1.125rem);
  font-weight: 700;
  text-align: center;
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
    width: 50%;
    height: 360px;
    text-align: left;
    margin: 0;
  }

  /* @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    font-size: clamp(0.9rem, 2.5vw, 1.10rem);
  } */
`

