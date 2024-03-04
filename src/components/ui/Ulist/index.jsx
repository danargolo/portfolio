import * as S from './styles'

export const Ulist = ({  itens, className, ...rest}) => {
  return (
    <S.Ulist className={className}>
      { itens 
        ? itens.map((item, index) => (
          <li key={item+index}>{item}</li>
        ))
        : null
      }
    </S.Ulist>
  );
}