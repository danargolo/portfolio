'use client'
  
import { useRef } from 'react'
import Image from 'next/image'

import * as S from './styles'
import logo from '/public/logo.svg'
import { Ulist } from '../_Ulist'
import { HamburgerBtn } from '../_HamburgerButton'
import { useDataContext } from '@/context'

const menu = [ 'Sobre' , 'Projetos', 'Contato' ]

export const Header= () => {
  const { isToggle } = useDataContext();
  const menuRef = useRef(null);

  return(
    <S.Header id='header'>
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