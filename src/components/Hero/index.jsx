import { Icon } from '../_Icons'
import * as S from './styles'

import linkedin from "../../../public/icons/linkedin.png"
import github from "../../../public/icons/github.png"
import { Button } from '../_Button'

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
          <Icon alt="Icon Linkedin" src={linkedin}/>
          <Icon alt="Icon GitHub" src={github}/>
          <Button text="Download CV"/>
        </S.IconsContainer>
      </S.HeroWrapper>
    </S.Hero>
    // <section className={styles.hero}>
    //   <div className={styles.container_hero}>
    //     <div className={styles.intro_hero}>
    //       <h6>{ptbr.hero.salute}</h6>
    //       <h4 className={ styles.text_h4 }>{ptbr.hero.name}</h4>
    //       <h2 className={ styles.text_h2 }>Desenvolvedor Front-End</h2>
    //       <p className={ styles.text_p } >{ptbr.hero.text}</p>
    //     </div>
    //     <Avatar />
    //   </div>
    //   <ScrollLink href="#about" >
    //     <Image src={scroll} className={ styles.icon } alt="" width={50} height={50}/>
    //   </ScrollLink>
      
    // </section>
  )
}

