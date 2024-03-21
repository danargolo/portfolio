"use client"

import styled, {keyframes} from "styled-components"

const draw = keyframes`
  0% {
    stroke-dashoffset: 2000;
    /* stroke-opacity: 0; */
  }
  100% {
    stroke-dashoffset: 0;
    /* transform: translate(100%, 0); */
  }

`
export const svg = styled.svg`
  /* border: 2px solid red; */
  display: none;
  

  @media (min-width: 769px) {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    aspect-ratio: 1;
    z-index: 1;
    width: 100%;
    /* height: 100%; */
  }
`
export const g = styled.g`
  stroke-opacity: 0.35;
  /* animation: ${draw} 14s infinite; */
  /* animation-timing-function: linear; */

`
export const g1 = styled.g`
  stroke-opacity: 0.25;
  animation: ${draw} 10s linear infinite;
  /* animation-delay: 1s; */
  /* animation-timing-function: linear; */
  

`



