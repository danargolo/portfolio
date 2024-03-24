import * as S from './styles'

export const Anchor = ({ text, path = "", target, className }) => {
  return (
    <S.Anchor 
      href={path} 
      target={target}
      className={className}
    >
      {text}
    </S.Anchor>
  )
}