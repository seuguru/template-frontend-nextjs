import { useRouter } from 'next/router';

import { Container } from 'styles/404';

export default function Custom404() {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <Container>
      <div className="box">
        <h1 className="title">404</h1>
        <p className="text">Ops, endereço não encontrado.</p>
        <button className="link" onClick={goBack}>
          <img src="icons/arrow.svg" alt="Flecha para a esquerda" />
          Voltar
        </button>
      </div>
    </Container>
  );
}
