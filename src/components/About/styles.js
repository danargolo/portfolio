"use client"

import styled from "styled-components"

export const Text = styled.p`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text100 };
`

export const About = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 25.625rem; */
  height: 40vh; 
  background-color: ${({theme}) => theme.colors.primary200};  
  position: relative;
  z-index: 1;
`
export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.1rem 0;
  gap: 3rem;
  width: 26rem;
`
