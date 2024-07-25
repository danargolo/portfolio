"use client"

import ScrollLink from '@/utils/link'
import * as S from './styles'

export const Anchor = ({ text, path = "", target, className }) => {
  return (
    <S.StyledScrollLink 
      href={path} 
      target={target}
    >
      <S.Anchor className={className}>
        {text}
      </S.Anchor>
    </S.StyledScrollLink>
  )
}