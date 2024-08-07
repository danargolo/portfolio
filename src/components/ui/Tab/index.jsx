"use client"

import { useEffect, useState } from 'react';
import * as S from './styles';
import { Icon } from '../Icon';

const tab = ["Linguagens", "Frameworks", "Ferramentas"]

const categorias = {
  Linguagens: ["JavaScript", "TypeScript", "Java", "Python"],
  Frameworks: ["React", "Next"],
  Ferramentas: ["VS Code", "Git", "Docker","AWS", "Jest"],
  ['+']: ["Team Work"]
};

export const Tab = () => {
  const [activedTab, setActivedTab] = useState(0);
  const [delay, setDelay] = useState(7000)
  const INCREMENT = 1;
  // let delay = 8000;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActivedTab(prevActiveTab => (prevActiveTab + INCREMENT) % Object.keys(categorias).length);
  //   }, delay);
  //   return () => clearInterval(interval);
  // }, [activedTab]);
  

  const handleClick = (index) => {
    setActivedTab(index)
    setDelay(()=> 7000);
  }

  
  return (
    <S.Tab>
      <S.Menu>
        {
          Object.entries(categorias).map((item, index) => (
            <li 
              key={index+1}
            >
              <S.ItemTab
                key={index+2} 
                onClick={() => handleClick(index)}
                $active={activedTab === index}
              >
                {item[0]}
              </S.ItemTab>
            </li>
          ))
        }

      </S.Menu>
      {
        Object.entries(categorias).map((item, index) => (
          <S.Content
            key={index+3}
            $active={activedTab === index}
          >
            {item[1].map((i, index2) => (
              <S.Item key={index2+item[0]}>
                <Icon width={50} height={50} alt={`Icon ${i}`} src={`/icons/${i}.svg`}/>
                <S.StackName>{i}</S.StackName>
              </S.Item>
            ))}
          </S.Content>
        ))
      }
    </S.Tab>

  )
}