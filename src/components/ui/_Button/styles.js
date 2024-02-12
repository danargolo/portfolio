"use client"

import styled from "styled-components"

export const Button = styled.button`
  background-image: linear-gradient(to right, #780206 0%, #061161  51%, #780206  100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  /* text-transform: uppercase; */
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`