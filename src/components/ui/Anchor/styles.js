"use client"

import Link from "next/link"
import styled from "styled-components"

export const Anchor = styled(Link)`
  background-image: linear-gradient( 45deg,
    ${({theme}) => theme.colors.primary100 } 0%, 
    ${({theme}) => theme.colors.bg200 } 51%, 
    ${({theme}) => theme.colors.primary100 } 100%
  );
  /* margin: 10px; */
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  font-size: clamp(0.9rem, 2vw, 1rem);
  /* text-transform: uppercase; */
  transition: 0.5s;
  background-size: 200% auto;
  color: ${({theme}) => theme.colors.text200};
  border: 2px solid ${({theme}) => theme.colors.bg300 };
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center;
    text-decoration: none;
    cursor: pointer;
    transform: scale(0.98);
  }

`