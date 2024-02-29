"use client"
import { Card } from '../ui/Card'
import * as S from './styles'
import { Button } from '../ui/Button';
import { Hr } from '../ui/Hr';


const projects = ['1','2','3','4','5'];


export const Projects = () => {
  return (
    <S.Projects id="projects">
      <S.Text>Projetos</S.Text>
      <S.ProjectsWrapper>
        <S.StyledSlider Component={Card} data={projects}/>
        <Button text="Ver mais" disabled/>
      </S.ProjectsWrapper>
      <Hr />
    </S.Projects>
  );
};

