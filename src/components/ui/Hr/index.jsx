import * as S from './styles'

export const Hr = ({text, ...rest}) => {
  return (
    <S.Hr data-content={text} {...rest}>
      <span></span>
    </S.Hr>
  )
}