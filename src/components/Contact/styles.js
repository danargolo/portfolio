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
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
  min-height: 25.625rem;
  /* height: fit-content; */
  gap: 3rem;
  background-color: ${({theme}) => theme.colors.bg100};  
  position: relative;
  z-index: 1;

  & p {
    margin: 20px;
  }
`
export const  ContactWrapper = styled.div`
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