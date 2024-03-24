"use client"

// import { Ulist } from '../ui/Ulist';
import * as S from './styles';

const infos = [ {name: 'Linkedin'}, {name: 'Email'}, {name: 'GitHub'}, {name: 'Telegram'} ]


export const Contact = () => {
  return (
    <S.Contact id="contact">
      {/* <S.Text>Contato</S.Text> */}
      <S.ContactWrapper>
        <p>Obrigado pela visita!</p>
        <p>Estou aberto a novas oportunidades e feedback. Não hesite em me contatar com propostas, críticas ou sugestões que possam enriquecer minha jornada profissional.</p>
      </S.ContactWrapper>
      <S.StyledUl itens={infos} />
    </S.Contact>
  );
};