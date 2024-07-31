"use client"

import ScrollLink from "@/utils/link"
import Image from "next/image"
import styled, { css, keyframes } from "styled-components"

const fadeIn = keyframes`
  0% {
    display: flex;
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
    display: none;
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(-5%);
  }
  50% {
    transform: translateY(-40%);
  }
  100% {
    transform: translateY(-5%);
  }
`;


export const DivWrapper = styled.div`
  /* display: none; */
  position: fixed;
  z-index: 99;
  /* top: 92%; */
  /* right: 4vw; */
  bottom: 30px;
  right: 45px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 2px solid ${({theme}) => theme.colors.bg300 };
  background-color: ${({theme}) => theme.colors.bg200 };
  ${({ $teste }) =>
    $teste
      ? css`
          animation: ${fadeIn} 600ms ease-in 1 forwards;
        `
      : css`
          animation: ${fadeOut} 600ms ease-out 1 forwards;
        `}

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const StyledScrollLink = styled(ScrollLink)`
  text-decoration: none;
`;

export const StyledImage = styled(Image)`
  position: relative;
`;