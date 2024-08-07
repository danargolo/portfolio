import styled from "styled-components";

export const HamburgerBtn = styled.button`
  display: flex;
  flex-direction: column;
  width: 1.9rem;
  height:  1.9rem;
  padding: .1875rem 0;
  border: none;
  background: none;
  outline: none;
  z-index: 0;
`

export const SpanMenu = styled.span`
  display: block;
  position: relative;
  width: 1.875rem;
  height: .1875rem;
  margin: .0625rem;
  background-color: ${ ({theme}) => theme.colors.primary300 };
  border-radius: .15rem;
  transform-origin: left center;
  transition: all 0.25s ease-in-out;


  &.Span1 {
    ${(props) =>
      props.$active &&
      `
        transform: rotate(45deg);
        top: -0.025rem; !important
        `}
    top: 0
  }

  &.Span2 {
    ${(props) =>
      props.$active &&
      `
        width: 0;
        opacity: 0;
      `}
    top: .3125rem
  }

  &.Span3 {
    ${(props) =>
      props.$active &&
      `
        transform: rotate(-45deg);
        top: .67rem; !important
        `}
    top: .625rem
  }
`


