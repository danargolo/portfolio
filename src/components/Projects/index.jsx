"use client"

import * as S from './styles'
import { Hr } from '../ui/Hr';
import { Slider } from '../ui/Slider';
import { Anchor } from '../ui/Anchor';
import { SectionTittle } from '../ui/SectionTittle';




const projects = ['1','2','3','1','2','3'];


export const Projects = () => {
  return (
    <S.Projects id="projects" style={{border:"2px solid red"}}>
      {/* <Hr text="Projetos"/> */}
      <S.ProjectsWrapper style={{border:"2px solid blue"}}>
        <SectionTittle text="Projetos" />
        <S.Text>Alguns dos meus projetos favoritos.</S.Text>
        {/* <S.StyledAnchor text="Ver todos" disabled/> */}
      </S.ProjectsWrapper>
      <Slider data={projects}/>
    </S.Projects>
  );
};

