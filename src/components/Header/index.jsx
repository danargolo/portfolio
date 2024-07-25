'use client'
  
import { useCallback, useEffect } from 'react'
import Image from 'next/image'

import * as S from './styles'
import logo from '/public/logo.svg'
import { Ulist } from '../ui/Ulist'
import { HamburgerBtn } from '../ui/HamburgerButton'
import { useDataContext } from '@/context'
import ScrollLink from '@/utils/link'

const menu = [ {name: 'Projetos', href:'#projects'}, {name: 'Sobre', href:'#about'}, {name: 'Contato', href:'#contact'} ]

export const Header= () => {
  const { isToggle, setIsToggle } = useDataContext();

  const handleScroll = useCallback(() => {
    setIsToggle(false)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);


  return(
    <S.Header id='header'>
      <S.ImgWrapper>
        <S.StyledScrollLink href='#header'>
          <Image src={ logo } width={50} height={50} alt="Dan Argolo logo" priority draggable='false'/>
        </S.StyledScrollLink>
        <HamburgerBtn />
      </S.ImgWrapper>
      <S.MenuWrapper $active={isToggle}>
        <S.StyledUlist itens={ menu } />
      </S.MenuWrapper>
    </S.Header>
  )
}