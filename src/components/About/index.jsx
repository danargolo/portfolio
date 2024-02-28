import { Tab } from '../ui/Tab';
import * as S from './styles'


const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum"
export const About = () => {
  return (
    <S.About id="about">
      <S.Text>Sobre</S.Text>
      <div>
        <S.SentenceText>Apaixonado por codificar desejos.</S.SentenceText>
        <S.AboutWrapper>         
          <S.AboutText>{text}</S.AboutText>
          <Tab />
        </S.AboutWrapper>
      </div>
    </S.About>
  );
};

 