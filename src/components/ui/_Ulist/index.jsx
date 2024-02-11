import * as S from './styles'

export const Ulist = ({  itens, ...rest}) => {
  return (
    <S.Ulist >
      { itens 
        ? itens.map((item, index) => (
          <li key={item+index}>{item}</li>
        ))
        : null
      }
    </S.Ulist>
  );
}