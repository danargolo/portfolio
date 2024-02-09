import styled, { keyframes } from "styled-components";

export const AnimationSpan1 = keyframes`
  0% {
    transform: rotate(0deg);
  /* -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg); */
  }

  100% {
    top: 17px;
    /* transform: translateY(-17px); */
    transform: rotate(-135deg);
      /* -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg); */
  }
`
export const AnimationSpan2 = keyframes`
  0% {

  }

100% {
    height: 0;
    opacity: 0;
  }
`
export const AnimationSpan3 = keyframes`
  0% {
    transform: rotate(0deg);
  /* -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg); */
  }

100% {
  bottom: 8px;
  transform: rotate(135deg);
  /* -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg); */
  }
`

export const HamburgerBtn = styled.button`
  display: flex;
  flex-direction: column;
  width: 3.125rem;
  height: 3.125rem;
  /* border: 2px solid red; */
  background: transparent;
  gap: 6px;
  z-index: 0;
`

export const SpanMenu = styled.span`
  display: block;
  position: relative;
  width: 2.8rem;
  height: .5rem;
  margin: .0625rem;
  background-color: red;
  border-radius: .25rem;
  transition: all 0.25s ease-in-out 0s;


  &.Span1 {
    ${(props) =>
      props.$active &&
      `
        transform: translateX(10px) translateY(4px) rotate(47deg);
        transform-origin: left top;
      `}
  }
  &.Span2 {
    ${(props) =>
      props.$active &&
      `
        height: 0;
        opacity: 0;
      `}
  }

  &.Span3 {
    ${(props) =>
      props.$active &&
      `
        transform: translateX(3px) translateY(13px) rotate(-47deg);
        transform-origin: left top;
      `}
  }
  /* &.Span2 {
    animation: ${(props) => (props.$active ? AnimationSpan2 : null)} .5s forwards;
  } */
  /* &.Span3 {
    animation: ${(props) => (props.$active ? AnimationSpan3 : null)} .5s forwards;
  } */
`


