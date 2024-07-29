"use client"

import styled, { keyframes } from "styled-components"


const route = keyframes`
  0% {
    left: -10px; /* Começa fora do HR */
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    left: calc(100% - 10px); /* Termina no final do HR */
    opacity: 0;
  }
`

export const Hr = styled.div`
  width: 85%;
  line-height: 1rem;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  /* opacity: 0.5; */
  &:before {
    content: '';
    background-image: linear-gradient( 45deg, 
      transparent,
      ${({theme}) => theme.colors.primary100 } 20%, 
      ${({theme}) => theme.colors.bg200 } 60%, 
      ${({theme}) => theme.colors.primary100 } 80%,
      transparent
    );
    
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 0.125rem;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    font-size: 26px;
    top: -0.5625rem;
    padding: 0.8 0.5em;
    line-height: 1.5em;
    color: ${({theme}) => theme.colors.text100};
    background-color: ${({theme}) => theme.colors.bg100};
    z-index: 2;
  }

  & > span{
    position: absolute;
    width: 5px;
    height: 2px;
    top: 11.9px;
    border-radius: 6px;
    background-color: rgba(51,121,194,0.70);
    box-shadow: 1px 1px 7px 0.2px rgba(255, 255, 255, 0.8); 
    animation: ${route} 8s ease-in-out infinite ${({$reverse}) => $reverse };
    z-index: 1;
  }

  @media (min-width: 769px) {
    display: none;
  }

`