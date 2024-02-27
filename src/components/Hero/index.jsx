import { Icon } from '../ui/Icon'
import * as S from './styles'

import linkedin from "../../../public/icons/linkedin.png"
import github from "../../../public/icons/github.png"
import { Button } from '../ui/Button'

export const Hero = () => {
  return(

    <S.Hero>
      <S.HeroWrapper>
        <S.TextContainer>
          <S.NameText>Olá, sou Danilo Argolo</S.NameText>
          <S.RoleText>Desenvolvedor Front-end</S.RoleText>
          <S.SentenceText>Apaixonado por codificar desejos.</S.SentenceText>
        </S.TextContainer>
        <S.IconsContainer>
          <Icon width={36} heigth={36} alt="Icon Linkedin" src={linkedin}/>
          <Icon width={36} heigth={36} alt="Icon GitHub" src={github}/>
          <Button text="Download CV"/>
        </S.IconsContainer>
      </S.HeroWrapper>
    </S.Hero>
  )
}

