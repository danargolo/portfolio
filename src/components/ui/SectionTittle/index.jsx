import * as S from './styles'

export const Tittle = ({text, ...rest}) => {
  return (
    <S.Tittle {...rest}>
      {`${text}.`}
    </S.Tittle>
  )
}