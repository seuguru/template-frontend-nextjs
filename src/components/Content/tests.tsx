import { render, screen } from '@testing-library/react';

import Content from '.';

describe('<Content />', () => {

  it('should load and display content', () => {
    render(<Content />);
    
    expect(screen.getByRole("title")).toHaveTextContent("Olá, guruzinho!");
  
    expect(screen.getByRole("subtitle-1"))
      .toHaveTextContent("Até agora está indo tudo como planejado..");
    
    expect(screen.getByRole("subtitle-2"))
      .toHaveTextContent("Você utilizou o template para aplicações NextJS, parabéns!!");
    
    expect(screen.getByRole("subtitle-3"))
      .toHaveTextContent("Está tudo pronto para você começar a fazer algo incrível,");
    
    expect(screen.getByRole("subtitle-4"))
      .toHaveTextContent("boa sorte!");
  });
});