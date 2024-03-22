"use client"

import { useEffect, useState } from 'react';
import * as S from './styles';

const tab = ["Linguagens", "Frameworks", "Ferramentas"]

const categorias = {
  Linguagens: ["JavaScript", "TypeScript", "Java", "Python"],
  Frameworks: ["React", "Angular", "Vue"],
  Ferramentas: ["VS Code", "Git", "Docker"],
  ['+']: ["Team Work"]
};

export const Tab = () => {
  const [activedTab, setActivedTab] = useState(0);
  const increment = 1;
  const delay = 6000;

  useEffect(() => {
    const interval = setInterval(() => {
      setActivedTab(prevActiveTab => (prevActiveTab + increment) % Object.keys(categorias).length);
    }, delay);
    return () => clearInterval(interval);
  }, []);
  

  const handleClick = (index) => {
    setActivedTab(index)
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
            {item[1].map((i, index2) => (<S.Item key={index2+item[0]}>{i}</S.Item>))}
          </S.Content>
        ))
      }
    </S.Tab>

  )
}