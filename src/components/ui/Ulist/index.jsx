import ScrollLink from '@/utils/link';
import * as S from './styles'

export const Ulist = ({  itens, className, ...rest}) => {
  return (
    <S.Ulist className={className}>
      { itens.map(({name, ...props}, index) => (
          <li key={name+index}>
            { props.href
              ? (
                  <ScrollLink {...props}>
                    {name}
                  </ScrollLink>
                )
              : name
            }
          </li>
        ))
      }
    </S.Ulist>
  );
}