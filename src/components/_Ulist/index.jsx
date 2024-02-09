import * as S from './styles'

export const Ul = ({itens, ...rest}) => {
  return (
    <S.Ul>
      { itens 
        ? itens.map((item, index) => (
          <li key={item+index}>{item}</li>
        ))
        : null
      }
    </S.Ul>
  );
}