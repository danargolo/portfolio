import * as S from './styles'

export const Anchor = ({ text, path = "", target }) => {
  return (
    <S.Anchor href={path} target={target}>{text}</S.Anchor>
  )
}