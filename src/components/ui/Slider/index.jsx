"use client"

import { useEffect, useRef, useState } from "react";
import * as S from './styles';
import { Card } from "../Card";

export const Slider = ({ Component, data, className }) => {
  const wrapperRef = useRef(null);
  const [activeIndicator, setActiveIndicator] = useState(0);
  const [totalIndicators, setTotalIndicators] = useState(0);

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
      const totalChildren = wrapperRef.current.children.length;
      const childrenWidth = wrapperRef.current.children[0].clientWidth;
      const wrapperWidth = wrapperRef.current.offsetWidth;
      const displayChildren = Math.round(wrapperWidth / childrenWidth)
      const totalIndicators = Math.ceil(totalChildren / displayChildren);
      setTotalIndicators(totalIndicators);
    }

    return () => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <S.Wrapper ref={wrapperRef}>
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
      </S.Wrapper>
      <S.IndicatorWrapper>
        {[...Array(totalIndicators).keys()].map((_, index) => (
          <S.Indicator
            key={index}
            $active={activeIndicator === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </S.IndicatorWrapper>
    </>
  )
}