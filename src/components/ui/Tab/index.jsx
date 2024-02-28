"use client"

import { useState } from 'react';
import * as S from './styles';

const tab = ["Linguagens", "Frameworks", "Ferramentas"]

export const Tab = () => {
  const [activedTab, setActivedTab] = useState(0);

  const handleClick = (index) => {
    setActivedTab(index)
  }

  
  return (
    <S.Tab>
      <S.Menu>
        {
          tab.map((item, index) => (
            <li 
              key={index+1}
            >
              <S.ItemTab
                key={index} 
                onClick={() => handleClick(index)}
                $active={activedTab === index}
              >
                {item}
              </S.ItemTab>
            </li>
          ))
        }

      </S.Menu>
      {
        tab.map((_, index) => (
          <S.Content
            key={index}
            $active={activedTab === index}
          >
            {index}
          </S.Content>
        ))
      }
    </S.Tab>

  )
}