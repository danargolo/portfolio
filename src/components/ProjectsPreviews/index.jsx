"use client"
import { useEffect, useRef } from 'react';
import { Card } from '../ui/Card'
import * as S from './styles'


export const Projects = () => {
  const wrapper = useRef();

  const handleClick = () => {
    wrapper.current.scrollLeft+=338
    console.log(wrapper.current.scrollLeft)
    console.log(wrapper)

  }

  useEffect(() => {
    wrapper.current.scrollLeft = 2
  
  }, [])
  
  return(
    
    <S.Projects id='projects'>
      <S.ProjectsWrapper>
        <S.Text>Projetos</S.Text>
        <S.CardsWrapper ref={wrapper}>
          <Card text='1'/>
          <Card text='2'/>
          <Card text='3'/>
          <Card text='4'/>
          <Card text='5'/>
        </S.CardsWrapper>
        <S.Indicators>
          <S.Indicator onClick={() => handleClick()}></S.Indicator>
          <S.Indicator onClick={() => handleClick()}></S.Indicator>
          <S.Indicator onClick={() => handleClick()}></S.Indicator>
          <S.Indicator onClick={() => handleClick()}></S.Indicator>
          <S.Indicator onClick={() => handleClick()}></S.Indicator>
        </S.Indicators>
      </S.ProjectsWrapper>
    </S.Projects>
  )
}

