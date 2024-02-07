  "use client"
  
  import { useRef } from "react"
  import Image from "next/image"

  import * as S from './styles'
  import logo from "/public/logo.svg"
  // import ScrollLink from "../utils/link"
  import linkedin from "../../../public/icons/linkedin.png"
  import github from "../../../public/icons/github.png"
  // import styles from "@styles/Header.module.css"

  export const Header= () => {
    const menuRef = useRef(null);

    return(
      <S.Header id='header'>
        <S.Logo src={logo} width={50} height={50} alt="Dan Argolo logo" priority/>
        <ul style={{display:"flex", justifyContent:"space-between", width:"70%"}}>
          <li>Sobre</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </S.Header>
    )
  }