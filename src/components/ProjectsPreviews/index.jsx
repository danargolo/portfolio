"use client"

import * as S from './styles'
import { Button } from '../ui/Button';
import { Hr } from '../ui/Hr';
import { Slider } from '../ui/Slider';




const projects = ['1','2','3'];


export const Projects = () => {
  return (
    <S.Projects id="projects">
      <S.Text>Projetos</S.Text>
        <Slider data={projects}/>
        <Button text="Ver mais" disabled/>
      <Hr />
    </S.Projects>
  );
};

