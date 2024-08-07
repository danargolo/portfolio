import Image from 'next/image'
import * as S from './styles'
import test from 'public/codeInProgress.png'
import test2 from 'public/projeto.png'

export const Card = ({text}) => {
  return (
    <S.Card>
      <S.BackgroundCard>
        <S.ImageWrapper src={test2} width={288} height={210}/>

        <S.DetailsWrapper>
          <S.Tittle>
            textttt
          </S.Tittle>
          <S.Description>
            Este repositório contém um projeto de criação de 2 redes com comunicação via ICMP.
          </S.Description>
          {/* <S.Stacks>
            <li>Java</li>
            <li>Next</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
          </S.Stacks> */}
          <S.LinkWrapper>
            <p>github</p>
            <p>deploy</p>
          </S.LinkWrapper>
        </S.DetailsWrapper>
      </S.BackgroundCard>
    </S.Card>
  )
}