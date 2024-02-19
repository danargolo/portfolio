"use client"
import { Card } from '../ui/Card'
import * as S from './styles'
import { Slider } from '../ui/Slider';


const projects = ['1','2','3','4','5'];


export const Projects = () => {
  return (
    <S.Projects id="projects">
      <S.ProjectsWrapper>
        <S.Text>Projetos</S.Text>
        <Slider Component={Card} data={projects}/>
      </S.ProjectsWrapper>
    </S.Projects>
  );
};

