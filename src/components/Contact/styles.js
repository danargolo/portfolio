"use client"

import styled from "styled-components"

export const Text = styled.p`
  margin-top: 2.5rem;
  display: flex;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text100 };
`

export const Contact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: fit-content;
  gap: 3rem;
  background-color: ${({theme}) => theme.colors.bg100};  
  position: relative;
  z-index: 1;
`