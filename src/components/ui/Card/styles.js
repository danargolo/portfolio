"use client"

import Image from "next/image"
import styled from "styled-components"

const Text = styled.p`
  font-size: clamp(1rem, 2vw, 1.025rem);
  color: ${({theme}) => theme.colors.text100};
  padding: 5px;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18.7rem;
  height: 26rem;
  border-radius: 6px;
  background-color: ${({theme}) => theme.colors.bg200};
  border: 2px solid ${({theme}) => theme.colors.text100};
  /* box-shadow: 5px 5px 10px -20px rgba(0,0,0,0.62); */
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  scroll-snap-align: center;
  /* transition: all 0.35s ease-in-out; */

  /* @media (min-width: 769px) {
    width: 19.7rem;
    height: 27rem;
    
  } */

  /*&:hover {
    transform: translateY(-6px) scale(1.006);
    box-shadow: 13px 14px 23px -4px rgba(0,0,0,0.62);
  } */
`
export const BackgroundCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative; */
  width: 100%;
  height: 100%;
  
  /* padding: 10px; */
  border-radius: 6px;
  /* background-color:hsla(214,50%,24%,1);
  background-image:
    radial-gradient(at 11% 17%, hsla(214,64%,67%,1) 0px, transparent 50%),
    radial-gradient(at 84% 80%, hsla(214,63%,67%,1) 0px, transparent 50%),
    radial-gradient(at 31% 72%, hsla(214,70%,33%,1) 0px, transparent 50%),
    radial-gradient(at 53% 51%, hsla(211,32%,90%,1) 0px, transparent 50%),
    radial-gradient(at 74% 27%, hsla(214,70%,33%,1) 0px, transparent 50%),
    radial-gradient(at 3% 96%, hsla(212,10%,30%,1) 0px, transparent 50%),
    radial-gradient(at 96% 6%, hsla(212,10%,30%,1) 0px, transparent 50%); */
  
  /* gap: 5px; */
  /* margin: 10px; */
`
export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 47%;
  background-color: ${({theme}) => theme.colors.primary100};
  gap: 5px;
  border-radius: 6px;
  /* border-radius: 5px;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.2px; */
`
export const Tittle = styled(Text)`
  width: 100%;
  /* background-color: ${({theme}) => theme.colors.accent200op}; */
  border-radius: 5px;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 0.2px;
`
export const Stacks = styled.ul`
  display: flex;
  align-self: start;
  margin: 10px 0 0 5px;
  color: ${({theme}) => theme.colors.text200};
  /* width: 100%; */
  /* background-color: ${({theme}) => theme.colors.accent200op}; */
  /* border: 2px solid ${({theme}) => theme.colors.bg100}; */
  list-style: none;
  border-radius: 5px;
  gap: 5px;
  
  & li {
    padding: 0 4px;
    background-color: ${({theme}) => theme.colors.accent200op};
    border-radius: 5px;
    font-size: 12px;
  }
`
export const Description = styled(Text)`
  width: 100%;
  height: 7.45rem;
  /* max-height: 100px; */
  /* margin-top: 10px; */
  /* padding-top: 10px; */
  /* background-color: ${({theme}) => theme.colors.accent200op}; */
  /* border-radius: 5px; */
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
  border-radius: 2px 2px 0 0;
  @media (min-width: 769px) {
    width: 100%;
  }
  /* border: 2px solid red; */
  /* margin: 5px 0; */
`
export const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 5px;
  gap: 10px;
  /* border: 2px solid red; */
  /* margin: 5px 0; */
`