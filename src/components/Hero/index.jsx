import { Icon } from '../ui/Icon'
import * as S from './styles'

import linkedin from "../../../public/icons/linkedin.png"
import github from "../../../public/icons/github.png"
import { Button } from '../ui/Button'
import { Hr } from '../ui/Hr'
import Wave from '../ui/Wave/wave'
import { Anchor } from '../ui/Anchor'

const link = "https://drive.google.com/file/d/123L7C6zDkLpblmF1NYpgJ1iex8-_g3yc/view?usp=drive_link"


export const Hero = () => {
  return(
    <S.Hero>
      <S.HeroWrapper>
        <S.TextContainer>
          <S.NameText>Olá, sou Danilo Argolo</S.NameText>
          <S.RoleText>Desenvolvedor Front-end</S.RoleText>
        </S.TextContainer>
        <S.AnchorContainer>
          <Anchor text="Contato" path="#contact" target="" />
          <Anchor text="Download CV" path={link} target="_blank" />
        </S.AnchorContainer>
        <S.IconsContainer>
          <Icon width={36} heigth={36} alt="Icon Linkedin" src={linkedin}/>
          <Icon width={36} heigth={36} alt="Icon GitHub" src={github}/>
        </S.IconsContainer>
      </S.HeroWrapper>
      <Wave />
      <Hr text="Projetos"/>
    </S.Hero>
  )
}

