"use client"

import Image from "next/image"
import styled from "styled-components"

const Text = styled.p`
  color: ${({theme}) => theme.colors.text100};
  padding: 5px;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20.7rem;
  height: 28rem;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.bg100};
  box-shadow: 5px 5px 10px -20px rgba(0,0,0,0.62);
  scroll-snap-align: center;
  /* transition: all 0.35s ease-in-out;

  &:hover {
    transform: translateY(-6px) scale(1.006);
    box-shadow: 13px 14px 23px -4px rgba(0,0,0,0.62);
  } */
`
export const BackgroundCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative; */
  width: 94%;
  height: 96%;
  padding: 10px;
  border-radius: 6px;
  background-color:hsla(214,50%,24%,1);
  background-image:
    radial-gradient(at 11% 17%, hsla(214,64%,67%,1) 0px, transparent 50%),
    radial-gradient(at 84% 80%, hsla(214,63%,67%,1) 0px, transparent 50%),
    radial-gradient(at 31% 72%, hsla(214,70%,33%,1) 0px, transparent 50%),
    radial-gradient(at 53% 51%, hsla(211,32%,90%,1) 0px, transparent 50%),
    radial-gradient(at 74% 27%, hsla(214,70%,33%,1) 0px, transparent 50%),
    radial-gradient(at 3% 96%, hsla(212,10%,30%,1) 0px, transparent 50%),
    radial-gradient(at 96% 6%, hsla(212,10%,30%,1) 0px, transparent 50%);
  
  gap: 5px;
  /* margin: 10px; */
`
export const Tittle = styled(Text)`
  width: 100%;
  background-color: ${({theme}) => theme.colors.accent200op};
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.2px;
`
export const Stacks = styled.ul`
  display: flex;
  align-self: start;
  margin-top: 5px;
  /* width: 100%; */
  /* background-color: ${({theme}) => theme.colors.accent200op}; */
  /* border: 2px solid ${({theme}) => theme.colors.bg100}; */
  list-style: none;
  border-radius: 5px;
  gap: 5px;
  
  & li {
    padding: 0 4px;
    background-color: ${({theme}) => theme.colors.accent200};
    border-radius: 5px;
    font-size: 12px;
  }
`
export const Description = styled(Text)`
  width: 100%;
  max-width: 100%;
  height: 100px;
  max-height: 100px;
  margin-top: 10px;
  padding-top: 10px;
  background-color: ${({theme}) => theme.colors.accent200op};
  border-radius: 5px;
  overflow-wrap: break-word;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.colors.primary100};
    border-radius: 3px;
}

`

export const ImageWrapper = styled(Image)`
  /* border: 2px solid red; */
  margin: 5px 0;
`