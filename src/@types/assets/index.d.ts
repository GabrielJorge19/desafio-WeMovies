declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface Filme {
  id: number,
  title: string,
  price: number,
  image: string,
}

interface FilmeCarrinho extends Filme {
  quant: number;
}

interface DisplayFilmesPropsInterface {
  carrinho: FilmeCarrinho[],
  setQuantidade: (a: number, b: number) => void,
  removerFilme: (a: number) => void,
}

