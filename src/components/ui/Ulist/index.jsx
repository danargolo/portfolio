import ScrollLink from '@/utils/link';
import * as S from './styles'

export const Ulist = ({  itens, className, ...rest}) => {
  console.log(itens)
  return (
    <S.Ulist className={className}>
      { itens.map(({name, href}, index) => (
          <li key={name+index}>
            { href
              ? (
                  <ScrollLink href={href}>
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