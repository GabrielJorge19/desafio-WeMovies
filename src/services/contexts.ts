import React, { createContext, SetStateAction } from 'react';

interface ContextCarrinhoType {
  carrinho?: FilmeCarrinho[],
  setCarrinho?: React.Dispatch<SetStateAction<FilmeCarrinho[]>>;
}
interface ContextFilmesType {
  filmes?: Filme[],
  setFilmes?: React.Dispatch<SetStateAction<Filme[]>>;
}

export const ContextCarrinho = createContext<ContextCarrinhoType>({});
export const ContextFilmes = createContext<ContextFilmesType>({filmes: []});

