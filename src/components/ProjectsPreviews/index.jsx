import { Card } from '../ui/Card'
import * as S from './styles'


export const Projects = () => {
  return(

    <S.Projects id='projects'>
      <S.ProjectsWrapper>
        <S.Text>Projetos</S.Text>
        <S.CardsWrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </S.CardsWrapper>
      </S.ProjectsWrapper>
    </S.Projects>
  )
}

