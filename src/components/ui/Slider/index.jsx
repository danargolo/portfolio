"use client"

import { useEffect, useRef, useState } from "react";
import * as S from './styles';

export const Slider = ({ Component, data }) => {
  const wrapperRef = useRef(null);
  const [activeIndicator, setActiveIndicator] = useState(0);

  const handleClick = (index) => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        left: index * wrapperRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const scrollLeft = wrapperRef.current.scrollLeft;
        const index = Math.round(scrollLeft / wrapperRef.current.offsetWidth);
        setActiveIndicator(index);
      }
    };

    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <S.Slider>
      <S.Wrapper ref={wrapperRef}>
          {data.map((item, index) => (
            <Component key={index} {...item} />
          ))}
      </S.Wrapper>
      <S.IndicatorWrapper>
        {data.map((_, index) => (
          <S.Indicator
            key={index}
            $active={activeIndicator === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </S.IndicatorWrapper>
    </S.Slider>
  )
}