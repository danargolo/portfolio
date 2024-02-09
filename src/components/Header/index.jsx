'use client'
  
import { useRef } from 'react'
import Image from 'next/image'

import * as S from './styles'
import logo from '/public/logo.svg'
import { Ulist } from '../_Ulist'
import { HamburgerBtn } from '../_HamburgerButton'

const menu = [ 'Sobre' , 'Projetos', 'Contato' ]

export const Header= () => {
  const menuRef = useRef(null);

  return(
    <S.Header id='header'>
      <S.MenuWrapper>
        <S.Logo src={ logo } width={50} height={50} alt="Dan Argolo logo" priority/>
        <HamburgerBtn />
        <Ulist itens={ menu } />
      </S.MenuWrapper>
    </S.Header>
  )
}