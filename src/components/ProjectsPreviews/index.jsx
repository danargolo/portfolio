"use client"

import * as S from './styles'
import { Hr } from '../ui/Hr';
import { Slider } from '../ui/Slider';
import { Anchor } from '../ui/Anchor';




const projects = ['1','2','3','1','2','3'];


export const Projects = () => {
  return (
    <S.Projects id="projects">
      <S.Text>Projetos</S.Text>
        <Slider data={projects}/>
        <Anchor text="Ver todos" disabled/>
      <Hr />
    </S.Projects>
  );
};

