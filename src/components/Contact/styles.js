"use client"

import styled from "styled-components"
import { Ulist } from "../ui/Ulist"

export const Text = styled.p`
  margin-top: 2.5rem;
  display: flex;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text100 };
`

export const Contact = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* padding-top: 5rem; */
  /* width: 100vw; */
  min-height: 30.625rem;
  /* height: fit-content; */
  gap: 3rem;
  background-color: ${({theme}) => theme.colors.bg100};  
  position: relative;
  z-index: 1;

  & p {
    margin: 20px;
  }
`
export const  ContactWrapper = styled.article`
  width: 85%;
  & > p{
    font-size: clamp(1rem, 3vw, 1.125rem);
    color: ${({theme}) => theme.colors.text200};
    line-height: 1.5rem;
    text-align: justify;
  }

  @media (min-width: 769px) {
    width: 50%;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {

    & > p{
      font-size: clamp(0.9rem, 2vw, 1rem);
  }
  }
`

export const StyledUl = styled(Ulist)`
  display: flex;
  width: 65%;
  justify-content: space-between;

  & li {
    color: ${({ theme }) => theme.colors.text100 };
  }

  @media (min-width: 769px) {
    width: 25%;
  }
`