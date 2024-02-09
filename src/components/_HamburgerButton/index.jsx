import { useState } from 'react'
import * as S from './styles'

export const HamburgerBtn = () => {
  const [isToggle, setIsToggle] = useState(false)
  console.log(isToggle);

  const handleClick = () => {
    setIsToggle((prevState) => !prevState);
  }

  return (
    <S.HamburgerBtn
      onClick={handleClick}
    >
      <S.SpanMenu className="Span1" $active={isToggle}></S.SpanMenu>
      <S.SpanMenu className="Span2" $active={isToggle}></S.SpanMenu>
      <S.SpanMenu className="Span3" $active={isToggle}></S.SpanMenu>
    </S.HamburgerBtn>
  )
}