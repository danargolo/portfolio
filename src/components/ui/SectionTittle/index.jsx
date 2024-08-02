import * as S from './styles'

export const SectionTittle = ({text, ...rest}) => {
  return (
    <S.Tittle {...rest}>
      {`${text}.`}
    </S.Tittle>
  )
}