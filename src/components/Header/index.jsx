'use client'
  
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import * as S from './styles'
import logo from '/public/logo.svg'
import { Ulist } from '../ui/_Ulist'
import { HamburgerBtn } from '../ui/_HamburgerButton'
import { useDataContext } from '@/context'

const menu = [ 'Sobre' , 'Projetos', 'Contato' ]

export const Header= () => {
  const { isToggle, setIsToggle } = useDataContext();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setIsToggle(false)
  }, [])

  useEffect(() => {
    console.log('inicio');
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const headerRef = useRef(null);

  return(
    <S.Header ref={headerRef} id='header'>
      <S.ImgWrapper>
        <Image src={ logo } width={50} height={50} alt="Dan Argolo logo" priority/>
        <HamburgerBtn />
      </S.ImgWrapper>
      <S.MenuWrapper $active={isToggle}>
        <Ulist itens={ menu } />
      </S.MenuWrapper>
    </S.Header>
  )
}