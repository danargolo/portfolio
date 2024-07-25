import * as S from './styles'

export const Button = ({ text, src }) => {
  return (
    <S.Button src={src}>{text}</S.Button>
  )
}