"use client"

import { useEffect, useRef, useState } from "react"
import ScrollLink from '@/utils/link'
import * as S from './styles'
import Image from "next/image";
import chevron from "../../../../public/icons/chevron-up.svg"
// import Image from "next/image";
// import chevron from "../../public/assets/icons/icons8-chevron-50-up.png";

/* Tentar calcular o minimo scrollPosition de acordo com tamanho da tela*/

export const TopButton = ({className}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);


  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (window.scrollY >= (5 * document.documentElement.clientHeight)/100) {
      setIsVisible(true)
    }
    else {
      setIsVisible(false)
    }
  }, [scrollPosition]);
  
  return(
    <S.DivWrapper className={className} $teste={isVisible}>
      <S.StyledScrollLink href="#header">
        <S.StyledImage src={chevron} alt="back to top" width={45} heigth={45}/>
      </S.StyledScrollLink>
    </S.DivWrapper>
  )
};
