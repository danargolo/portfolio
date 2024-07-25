'use client'
  
import { useCallback, useEffect } from 'react'
import Image from 'next/image'

import * as S from './styles'
import logo from '/public/logo.svg'
import { Ulist } from '../ui/Ulist'
import { HamburgerBtn } from '../ui/HamburgerButton'
import { useDataContext } from '@/context'

const menu = [ 'Projetos', 'Sobre', 'Contato' ]

export const Footer= () => {

  return(
    <S.Footer id='footer'>
      <p>©2024 - Desenvolvido por Dan Argolo.</p>
    </S.Footer>
  )
}