"use client"

import * as S from './styles'
import { Hr } from '../ui/Hr';
import { Slider } from '../ui/Slider';
import { Anchor } from '../ui/Anchor';




const projects = ['1','2','3','1','2','3'];


export const Projects = () => {
  return (
    <S.Projects id="projects">
      <Hr text="Projetos"/>
      <S.Text>Alguns dos meus projetos.</S.Text>
      <S.ProjectsWrapper>
        <Slider data={projects}/>
        <S.StyledAnchor text="Ver todos" disabled/>
      </S.ProjectsWrapper>
    </S.Projects>
  );
};

