"use client"
import { Card } from '../ui/Card'
import * as S from './styles'
import { Button } from '../ui/Button';


const projects = ['1','2','3','4','5'];


export const Projects = () => {
  return (
    <S.Projects id="projects">
      <S.ProjectsWrapper>
        <S.Text>Projetos</S.Text>
        <S.StyledSlider Component={Card} data={projects}/>
        <Button text="Ver mais" disabled/>
        <hr />
      </S.ProjectsWrapper>
    </S.Projects>
  );
};

