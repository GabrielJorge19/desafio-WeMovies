import React, { createContext, SetStateAction } from 'react';

interface ContextCarrinhoType {
  carrinho?: FilmeCarrinho[],
  setCarrinho?: React.Dispatch<SetStateAction<FilmeCarrinho[]>>;
}

export const ContextCarrinho = createContext<ContextCarrinhoType>({});
export const ContextFilmes = createContext<{filmes: Filme[]}>({filmes: []});

