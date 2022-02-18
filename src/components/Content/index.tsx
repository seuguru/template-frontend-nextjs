import { Container, Title, Subtitle } from "./styles";

const Content: React.FC = () => (
  <Container>
    <Title role="title">Olá, guruzinho!</Title>
    <Subtitle role="subtitle-1">Até agora está indo tudo como planejado..</Subtitle>
    <Subtitle role="subtitle-2">
      Você utilizou o template para aplicações NextJS, parabéns!!
    </Subtitle>
    <Subtitle role="subtitle-3">
      Está tudo pronto para você começar a fazer algo incrível,
    </Subtitle>
    <Subtitle role="subtitle-4">boa sorte!</Subtitle>
  </Container>
);

export default Content;
