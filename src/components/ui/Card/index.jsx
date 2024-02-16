import Image from 'next/image'
import * as S from './styles'
import test from 'public/codeInProgress.png'
import test2 from 'public/projeto.png'

export const Card = () => {
  return (
    <S.Card>
      <S.BackgroundCard>
        <S.Tittle>
          Projeto teste
        </S.Tittle>
        <S.ImageWrapper src={test2} width={290} height={210}/>
        <S.Stacks>
          <li>Java</li>
          <li>Next</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
        </S.Stacks>
        <S.Description>
          Este repositório contém um projeto de criação de 2 redes com comunicação via ICMP.
        </S.Description>
        <div style={{display:'flex'}}>
          <p>github</p>
          <p>deploy</p>
        </div>
      </S.BackgroundCard>
    </S.Card>
  )
}