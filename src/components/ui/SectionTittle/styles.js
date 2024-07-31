"use client"
import styled from "styled-components";

export const Tittle = styled.p`
  margin-top: 4.5rem;
  display: flex;
  align-self: flex-start;
  font-size: clamp(1.5rem, 15vw, 1.875rem);
  font-family: Roboto, sans-serif;
  color: ${({ theme }) => theme.colors.text100 };
  
  @media (min-width: 769px) {
    margin-top: 3rem;
    
  }
`